import { error as svelteError, redirect } from '@sveltejs/kit'
import type { PageServerLoad, Actions } from './$types'
import type { AccountData, AccountList } from '$lib'

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabase } }) => {
	const { session } = await safeGetSession()

	if (!session) {
		redirect(303, '/auth/signin')
	}

	const { data, error } = await supabase
		.from('accounts')
		.select('name,type,balance')
		.eq('user', session.user.id)

	if (!data || error) {
		svelteError(500, 'Internal server error')
	}

	const accounts: AccountList = {
		accounts: data.map(account => ({
		  balance: account.balance,
		  name: account.name,
		  type: account.type
		}))
	  };

	return accounts
}
