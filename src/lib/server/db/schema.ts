import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { generateRandomInteger } from 'oslo/crypto';

function generateUid() {
	return '70' + String(generateRandomInteger(9999));
}

const timestamp = {
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
};

const users = sqliteTable('users', {
	...timestamp,
	id: text('id')
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => generateUid()),
	username: text('username').notNull().unique(),
	password: text('password').notNull(),
	first_name: text('first_name'),
	last_name: text('last_name')
});

type InsertUserParams = typeof users.$inferInsert;

const products = sqliteTable('products', {
	...timestamp,
	id: text('id')
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => generateUid()),
	name: text('name').notNull().unique(),
	description: text('description'),
	price: integer('price').notNull()
});

type InsertProductParams = typeof products.$inferInsert;

const carts = sqliteTable('cart', {
	id: text('id')
		.primaryKey()
		.notNull()
		.unique()
		.$defaultFn(() => generateUid()),
	owner_id: text('owner_id').references(() => users.id),
	items: text('items', { mode: 'json' })
});

type InsertCartParams = typeof carts.$inferInsert;

export {
	users,
	type InsertUserParams,
	products,
	type InsertProductParams,
	carts,
	type InsertCartParams
};
