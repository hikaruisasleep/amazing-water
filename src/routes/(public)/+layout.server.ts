import { getUserById } from '$lib/server/db/users';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');
	const { uid, sessionID } = JSON.parse(session!);

	const user = await getUserById(uid);

	return {
		auth: {
			session: sessionID,
			user: user
		}
	};
};
