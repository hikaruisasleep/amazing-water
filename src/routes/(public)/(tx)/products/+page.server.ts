import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getAllProducts } from '$lib/server/db/products';
import { createNewCart, editCartById, getCartFromOwnerId } from '$lib/server/db/cart';
import _ from 'lodash-es';

export const actions: Actions = {
	cart: async ({ cookies, request }) => {
		const form = await request.formData();

		const session = cookies.get('session');
		if (!session) {
			return fail(500, { error: 'invalid session' });
		}
		const { uid } = JSON.parse(session!);

		const allItems = await getAllProducts();

		let items: { [x: string]: { amt: number } }[] = [];

		let cart = await getCartFromOwnerId(uid);
		if (!cart || typeof cart === 'undefined') {
			await createNewCart({ owner_id: uid });
			cart = await getCartFromOwnerId(uid);
		}

		for (const i of allItems) {
			let amt = <string>form.get(i.id);
			console.log('plain', amt);
			console.log('iterating object:', i);
			if (!_.isEmpty(cart.items) && cart.items != null) {
				console.log('cart hit: plain', amt);
				let itemsArray = Object.values(cart.items);
				console.log('cart hit: contents', itemsArray);
				let currentItem = itemsArray.find((item) => {
					console.log('testing', Object.keys(item)[0], 'against', i.id);
					return Object.keys(item)[0] == i.id;
				});

				if (typeof currentItem === 'undefined') {
					currentItem = { [i.id]: { amt: parseInt(amt) } };
					console.log('item undefined, forced write as', currentItem);
				} else {
					console.log('cart hit: item', currentItem);
				}

				if (Object.values(currentItem)[0].amt == null) {
					Object.values(currentItem)[0].amt = 0;
				}

				let total = parseInt(String(Object.values(currentItem)[0].amt)) + parseInt(amt);

				items.push({ [i.id]: { amt: total } });
				console.log('added', amt, 'of', i.id);
			} else {
				console.log('plain in else', amt);
				console.log(parseInt(amt));
				let x = { [i.id]: { amt: parseInt(amt) } };
				console.log(x);
				items.push(x);
			}
		}

		cart.items = { ...items };

		await editCartById(cart);
		redirect(301, '/cart');
	}
};

export const load: PageServerLoad = async function load({ cookies }) {
	const session = cookies.get('session');
	let uid: any;
	let cart: any | null;
	if (session) {
		uid = JSON.parse(session!).uid;
		cart = await getCartFromOwnerId(uid);
		if (cart == null) {
			await createNewCart({ owner_id: uid });
			cart = await getCartFromOwnerId(uid);
		}
	} else {
		cart = null;
	}

	const products = await getAllProducts();

	return {
		products: products,
		cart: cart
	};
};
