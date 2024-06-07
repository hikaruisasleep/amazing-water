import { createSession, setSessionUser } from '$lib/server/session';
import { createNewUser, getUserFromUsername } from '$lib/server/db/users';
import { fail, redirect } from '@sveltejs/kit';
import argon2 from 'argon2';
import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = {
	register: async ({ cookies, request }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		const fn = form.get('firstname');
		const ln = form.get('lastname');

		const session = cookies.get('session');
		const { sessionID } = JSON.parse(session!);

		if (
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			typeof fn !== 'string' ||
			typeof ln !== 'string'
		) {
			return fail(400, {
				email: '',
				error: 'authentication'
			});
		}

		const hashPassword = await argon2.hash(password);

		await createNewUser({ username, password: hashPassword, first_name: fn, last_name: ln }).catch(
			(e) => {
				return fail(500, {
					error: e
				});
			}
		);

		let uid = (await getUserFromUsername(username)).id;

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
