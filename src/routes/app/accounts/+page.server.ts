import { error as svelteError, redirect } from '@sveltejs/kit'
import type { PageServerLoad, Actions } from './$types'
import type { AccountList } from '$lib'

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabase } }) => {
	const { session } = await safeGetSession()

	if (!session) {
		redirect(303, '/auth/signin')
	}

	const { data, error } = await supabase
		.from('accounts')
		.select('id,name,type,balance')
		.eq('user', session.user.id)

	if (!data || error) {
		svelteError(500, 'Internal server error')
	}

	const accounts: AccountList = {
		accounts: data.map((account) => ({
			id: account.id,
			balance: account.balance,
			name: account.name,
			type: account.type
		}))
	}

	return accounts
}

export const actions: Actions = {
	add: async ({ locals: { supabase }, request }) => {
		const formData = await request.formData()
		const name = formData.get('name') as string
		const type = formData.get('type') as string
		const balance = formData.get('balance') as string

		const { data, error } = await supabase
			.from('accounts')
			.insert([
				{
					name,
					type,
					balance
				}
			])
			.select()

		if (error) {
			svelteError(500, 'Internal server error')
		}

		if (balance !== '0') {
			const res = await supabase.from('records').insert([
				{
					account: data[0].id,
					amount: balance,
					type: 'Income',
					category: 'Initial balance'
				}
			])

			if (res.error) {
				svelteError(500, 'Internal server error')
			}
		}

		return { success: true }
	},
	update: async ({ locals: { supabase }, request }) => {
		const formData = await request.formData()
		const id = formData.get('id') as string
		const name = formData.get('name') as string
		const type = formData.get('type') as string

		const { error } = await supabase.from('accounts').update({ name, type }).eq('id', id)

		if (error) svelteError(500, 'Internal server error')

		return { success: true }
	},
	delete: async ({ locals: { supabase }, request }) => {
		const formData = await request.formData()
		const id = formData.get('id') as string

		const { error } = await supabase.from('accounts').delete().eq('id', id)

		if (error) svelteError(500, 'Internal server error')

		return { success: true }
	}
} satisfies Actions
