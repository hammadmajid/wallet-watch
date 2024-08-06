import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import type { UserProfileData } from '$lib'

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabase } }) => {
	const { session } = await safeGetSession()

	if (!session) {
		redirect(303, '/auth/signin')
	}

	const { data, error } = await supabase
		.from('profiles')
		.select('full_name,default_currency')
		.eq('uuid', session.user.id)

	if (!data || error) {
		redirect(500, 'Database error')
	}

	const userData: UserProfileData = {
		name: data[0]?.full_name,
		email: session.user.email!,
		currency: data[0].default_currency
	}

	return userData
}

export const actions: Actions = {
	signout: async ({ locals: { supabase, safeGetSession } }) => {
		const { session } = await safeGetSession()
		if (session) {
			await supabase.auth.signOut()
			redirect(303, '/')
		}
	}
}
