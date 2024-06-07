import { getProductById } from '$lib/server/db/products';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { productId } = params;
	const product = await getProductById(productId);

	if (!productId) {
		error(404, 'Book not found');
	}

	return {
		product
	};
};
