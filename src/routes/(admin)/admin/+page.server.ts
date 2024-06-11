import { deleteOrderById } from '$lib/server/db/orders';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	clear: async ({ request }) => {
		const form = await request.formData();
		const orderId = form.get('id');

		if (typeof orderId === 'string') {
			await deleteOrderById(orderId);
			return {
				deleted: true
			};
		} else {
			fail(500, { error: 'data failure' });
		}
	}
};
