import { db } from '$lib/server/db/client';
import { carts, type InsertCartParams } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

const createNewCart = async (items: InsertCartParams) => {
	await db.insert(carts).values(items);
};

const getCartById = async (id: string) => {
	const cart = await db.select().from(carts).where(eq(carts.id, id));
	return cart[0];
};

const getCartFromOwnerId = async (uid: string) => {
	const cart = await db.select().from(carts).where(eq(carts.owner_id, uid));
	return cart[0];
};

const editCartById = async (cart: InsertCartParams & { id: string; owner_id: string }) => {
	await db
		.update(carts)
		.set(cart)
		.where(eq(carts.id, cart.id) && eq(carts.owner_id, cart.owner_id));
};

const clearCart = async (uid: string) => {
	await db.delete(carts).where(eq(carts.owner_id, uid));
};

export { createNewCart, getCartById, getCartFromOwnerId, editCartById, clearCart };
