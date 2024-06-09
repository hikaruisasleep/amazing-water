import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getAllProducts, getProductById } from '$lib/server/db/products';
import { createNewCart, editCartById, getCartFromOwnerId } from '$lib/server/db/cart';

export const actions: Actions = {};

export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');
	const { uid } = JSON.parse(session!);

	let cart = await getCartFromOwnerId(uid);
	let productIDs = [];
	let productsInCart = [];
	if (cart.items) {
		for (const items of Object.values(cart.items)) {
			productIDs.push(Object.keys(items)[0]);
			for (const id of productIDs) {
				let product = getProductById(id);
				let entry = {
					...items
				};
				productsInCart.push(entry);
			}
		}
	}

	return {
		cart: { ...cart, productIDs }
	};
};
