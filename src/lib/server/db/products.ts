import { db } from '$lib/server/db/client';
import { products, type InsertProductParams } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

const createNewProduct = async (product: InsertProductParams) => {
	await db.insert(products).values(product);
};

const getProductById = async (id: string) => {
	const product = await db.select().from(products).where(eq(products.id, id));

	return product[0];
};

const deleteProductById = async (id: string) => {
	await db.delete(products).where(eq(products.id, id));
};

const getAllProducts = async () => {
	return await db.select().from(products).orderBy(desc(products.id));
};

const editProductById = async (product: InsertProductParams & { id: string }) => {
	await db.update(products).set(product).where(eq(products.id, product.id));
};

export { createNewProduct, getProductById, deleteProductById, getAllProducts, editProductById };
