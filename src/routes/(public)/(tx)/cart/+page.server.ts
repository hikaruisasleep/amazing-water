import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getProductById } from '$lib/server/db/products';
import { createNewCart, editCartById, getCartFromOwnerId } from '$lib/server/db/cart';
import _ from 'lodash-es';

export const actions: Actions = {
	update: async ({ cookies, request }) => {
		const form = await request.formData();

		const session = cookies.get('session');
		if (!session) {
			return fail(500, { error: 'invalid session' });
		}
		const { uid } = JSON.parse(session!);

		let itemsInCart: { [x: string]: { amt: number } }[] = [];
		let cart = await getCartFromOwnerId(uid);

		if (cart.items) {
			for (const items of Object.values(cart.items)) {
				const productID = Object.keys(items)[0];
				let amt = <string>form.get(productID);

				itemsInCart.push({ [productID]: { amt: parseInt(amt) } });
			}
		}

		cart.items = { ...itemsInCart };

		await editCartById(cart);

		return { edited: true };
	}
};
export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');
	if (!session) {
		redirect(303, '/login');
	}
	const { uid } = JSON.parse(session!);

	let cart = await getCartFromOwnerId(uid);
	if (!cart || typeof cart === 'undefined') {
		await createNewCart({ owner_id: uid });
		cart = await getCartFromOwnerId(uid);
	}

	let productsInCart: {
		product: {
			name: string;
			id: string;
			createdAt: Date;
			updatedAt: Date;
			description: string | null;
			price: number;
		};
		amount: number;
	}[] = [];

	if (cart.items) {
		for (const items of Object.values(cart.items)) {
			const productID = Object.keys(items)[0];
			const product = await getProductById(productID);
			const amt = Object.values(items)[0];

			if (amt.amt > 0) {
				let entry = {
					product: product,
					amount: amt.amt
				};

				productsInCart.push(entry);
			}
		}
	}

	return {
		cart: { productsInCart }
	};
};
