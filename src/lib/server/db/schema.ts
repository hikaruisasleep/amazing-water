import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { generateRandomInteger } from 'oslo/crypto';

function generateUid() {
	let random = generateRandomInteger(99999);
	return '70' + random.toString;
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
	username: text('username').notNull(),
	password: text('password').notNull(),
	first_name: text('first_name'),
	last_name: text('last_name')
});

type InsertUserParams = typeof users.$inferInsert;

export { users, type InsertUserParams };
