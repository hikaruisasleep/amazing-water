import { db } from '$lib/server/db/client';
import { orders, type InsertOrderParams } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

const createNewOrder = async (order: InsertOrderParams) => {
	await db.insert(orders).values(order);
};

const getAllOrders = async () => {
	return await db.select().from(orders).orderBy(desc(orders.id));
};

const getOrderById = async (id: string) => {
	const order = await db.select().from(orders).where(eq(orders.id, id));
	return order[0];
};

const deleteOrderById = async (id: string) => {
	await db.delete(orders).where(eq(orders.id, id));
};

export { createNewOrder, getAllOrders, getOrderById, deleteOrderById };
