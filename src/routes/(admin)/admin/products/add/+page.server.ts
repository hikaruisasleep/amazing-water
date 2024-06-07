import { createNewProduct } from '$lib/server/db/products';
import { fail } from '@sveltejs/kit';
import { generateRandomInteger } from 'oslo/crypto';

export const load = async () => {
	return {};
};

export const actions = {
	addNewProduct: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { name, description, price } = formData as {
			name: string;
			description: string;
			price: string;
		};

		const product = {
			id: '70' + String(generateRandomInteger(9999)),
			name,
			description,
			price: parseInt(price)
		};

		try {
			await createNewProduct(product);

			return {
				success: true,
				productId: product.id
			};
		} catch (error) {
			console.error(error);
			return fail(500, {
				error: 'Something went wrong while creating the item. Please try again.'
			});
		}
	}
};
