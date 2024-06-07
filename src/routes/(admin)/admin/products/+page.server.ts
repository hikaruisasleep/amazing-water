import { getAllProducts } from '$lib/server/db/products';

export const load = async () => {
	return {
		products: await getAllProducts()
	};
};
