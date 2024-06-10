import { redirect, type Actions } from '@sveltejs/kit';
import { deleteSession } from '$lib/server/session';

export const actions: Actions = {
	default: async ({ cookies }) => {
		const session = cookies.get('session');

		if (session) {
			deleteSession(cookies);
		}

		redirect(301, '/');
	}
};
