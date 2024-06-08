import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getAllProducts } from '$lib/server/db/products';

export const actions: Actions = {
	cart: async ({ request }) => {
		const form = await request.formData();

		const allItems = await getAllProducts();
		let items = [];
		for (const i of allItems) {
			let amt = form.get(i.id);
			if (typeof amt !== 'string') {
				return fail(500, {
					error: 'typeError'
				});
			}
			items.push({ [i.id]: amt });
		}

		return { items: JSON.stringify(items) };
	}
};

export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');

	if (!session) {
		redirect(300, 'login');
	}

	const products = await getAllProducts();

	return {
		products: products
	};
};
