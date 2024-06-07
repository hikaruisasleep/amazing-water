import { db } from '$lib/server/db/client';
import { users, type InsertUserParams } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

const createNewUser = async (user: InsertUserParams) => {
	await db.insert(users).values(user);
};

const getUserById = async (id: string) => {
	const user = await db.select().from(users).where(eq(users.id, id));
	return user[0];
};

const getUserFromUsername = async (uname: string) => {
	const user = await db.select().from(users).where(eq(users.username, uname));
	return user[0];
};

const deleteUserById = async (id: string) => {
	await db.delete(users).where(eq(users.id, id));
};

const editUserById = async (user: InsertUserParams & { id: string }) => {
	await db.update(users).set(user).where(eq(users.id, user.id));
};

export { createNewUser, getUserById, getUserFromUsername, deleteUserById, editUserById };
