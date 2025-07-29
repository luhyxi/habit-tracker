CREATE TABLE `habit` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`description` text(1000),
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer DEFAULT (unixepoch()) NOT NULL,
	`type` text,
	`isArchived` integer
);
