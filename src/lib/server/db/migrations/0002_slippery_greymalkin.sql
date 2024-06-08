CREATE TABLE `cart` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text,
	`items` text,
	FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cart_id_unique` ON `cart` (`id`);