import { getUserById } from '$lib/server/db/users';
import type { LayoutServerLoad } from './$types';
import { deleteSession } from '$lib/server/session';

export const load: LayoutServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');

	if (session) {
		const { uid, sessionID } = JSON.parse(session!);

		const user = await getUserById(uid);

		if (!user || typeof user === 'undefined') {
			deleteSession(cookies);
		}

		return {
			auth: {
				session: sessionID,
				user: user
			}
		};
	} else {
		return {};
	}
};
