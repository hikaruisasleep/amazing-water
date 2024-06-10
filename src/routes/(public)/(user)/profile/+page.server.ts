import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');
	if (!session) {
		redirect(301, '/login');
	}
};
