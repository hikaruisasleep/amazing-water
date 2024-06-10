import { createSession, setSessionUser } from '$lib/server/session';
import { getUserFromUsername } from '$lib/server/db/users';
import { fail } from '@sveltejs/kit';
import argon2 from 'argon2';
import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		const session = cookies.get('session');
		const { sessionID } = JSON.parse(session!);

		if (typeof username !== 'string') {
			return fail(400, {
				email: '',
				error: 'authentication'
			});
		}

		const user = await getUserFromUsername(username);

		if (typeof password !== 'string' || !user) {
			return fail(400, {
				username,
				error: 'authentication'
			});
		}

		const passwordHash = user.password;
		const validPassword = await argon2.verify(passwordHash, password);
		if (!validPassword) {
			return fail(400, {
				username,
				error: 'authentication'
			});
		}

		const uid = user.id;

		setSessionUser({ cookies, uid, sessionID });
		return {
			success: true,
			sessionID: sessionID
		};
	}
};

export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');

	if (!session) {
		createSession(cookies);
	}

	return {};
};
