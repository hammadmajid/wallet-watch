import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
	const { session } = await safeGetSession()

	if (session) {
		redirect(303, '/app/profile')
	}

	return { url: url.origin }
}

export const actions: Actions = {
	default: async (event) => {
		const {
			request,
			locals: { supabase }
		} = event

		const formData = await request.formData()
		const email = formData.get('email') as string
		const password = formData.get('password') as string

		const { error } = await supabase.auth.signInWithPassword({ email, password })

		if (error) {
			return fail(500, { code: 'Error:', message: 'Invalid credentials' })
		}

		redirect(302, '/app/profile')
	}
} satisfies Actions
