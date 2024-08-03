import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (session) {
        redirect(303, '/app/profile');
    }

    return { url: url.origin };
}

export const actions: Actions = {
    default: async (event) => {
        const {
            request,
            locals: { supabase },
        } = event;

        const formData = await request.formData();
        const firstName = formData.get('first_name') as string;
        const lastName = formData.get('last_name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const currency = formData.get('currency') as string;


        const { error } = await supabase.auth.signUp({
            email, password, options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    currency
                }
            }
        });

        if (error) {
            return fail(error.status ?? 500, { code: error.code, message: error.message });
        }

        throw redirect(302, "/app/profile");

    },
} satisfies Actions;