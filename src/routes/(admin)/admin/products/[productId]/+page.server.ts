import { deleteProductById, editProductById, getProductById } from '$lib/server/db/products';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { productId } = params;
	const product = await getProductById(productId);

	if (!productId) {
		error(404, 'Product not found');
	}

	return {
		product
	};
};

export const actions: Actions = {
	delete: async ({ params }) => {
		const { productId } = params;
		if (!productId) {
			return fail(400, {
				error: 'no such item'
			});
		}
		await deleteProductById(productId);
		return redirect(300, '/admin/products');
	},

	edit: async ({ params, request }) => {
		const { productId } = params;
		const formData = Object.fromEntries(await request.formData());
		const { name, description, price } = formData as {
			name: string;
			description: string;
			price: string;
		};
		if (!productId) {
			return fail(400, {
				error: 'no such item'
			});
		}
		const product = {
			id: productId,
			name,
			description,
			price: parseInt(price)
		};
		await editProductById(product);
		return {
			edited: true
		};
	}
};
