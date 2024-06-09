import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getAllProducts } from '$lib/server/db/products';
import { createNewCart, editCartById, getCartById, getCartFromOwnerId } from '$lib/server/db/cart';

export const actions: Actions = {
	cart: async ({ cookies, request }) => {
		const form = await request.formData();

		const session = cookies.get('session');
		const { uid } = JSON.parse(session!);

		if (!uid) {
			return fail(500, { error: 'invalid session' });
		}

		const allItems = await getAllProducts();

		let items: { [x: string]: { amt: number } }[] = [];

		for (const i of allItems) {
			let amt = form.get(i.id);

			if (typeof amt === 'string') {
				items.push({ [i.id]: { amt: parseInt(amt) } });
			} else if (typeof amt === 'number') {
				items.push({ [i.id]: { amt: amt } });
			}
		}

		let cart = await getCartFromOwnerId(uid);
		if (!cart || typeof cart === 'undefined') {
			await createNewCart({ owner_id: uid });
			cart = await getCartFromOwnerId(uid);
		}

		cart.items = { ...items };

		await editCartById(cart);

		return { cart: cart };
	}
};

export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');
	const { uid } = JSON.parse(session!);

	const products = await getAllProducts();
	let cart = await getCartFromOwnerId(uid);
	if (cart == null) {
		await createNewCart({ owner_id: uid });
		cart = await getCartFromOwnerId(uid);
	}

	return {
		products: products,
		cart: cart
	};
};
