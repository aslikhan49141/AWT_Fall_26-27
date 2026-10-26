# SkillSwap API - Lab Task 2

Course: CSC4161 Advance Programming in Web Technology (Section D)
Project: SkillSwap - A Peer-to-Peer Skill Learning and Exchange Platform
Stack: NestJS, TypeORM, PostgreSQL

## Entities

| Entity | Table | Fields |
| --- | --- | --- |
| UserEntity | users | id (PK), name, email (unique), password_hash, bio, location, role, status, created_at |
| SkillCategoryEntity | skill_categories | id (PK), name (unique), description |
| SkillEntity | skills | id (PK), name, description, category_id (FK -> skill_categories.id) |

## Setup

1. Create the database in PostgreSQL (pgAdmin or DBeaver):

       CREATE DATABASE skillswap;

2. Edit `src/database.config.ts` (host, port, username, password, database).
3. Install packages: `npm install`
4. Run the migration: `npm run migration:run`
5. Verify: `npm run migration:show` and check `users`, `skill_categories`, `skills` in the database.
6. Start the server: `npm run start`
7. Import `SkillSwap-Lab2.postman_collection.json` into Postman and run the requests in order.

The migration file is already generated in `src/migrations`. To generate it again from scratch
(delete the old file and empty database first):

    npm run migration:generate -- src/migrations/CreateInitialTables

## Endpoints

| Method | URL | Description |
| --- | --- | --- |
| POST | /users | Create a user |
| GET | /users | List all users |
| GET | /users/:id | Get one user |
| POST | /skill-categories | Create a category |
| GET | /skill-categories | List all categories |
| GET | /skill-categories/:id | Get one category |
| POST | /skills | Create a skill (needs a valid categoryId) |
| GET | /skills | List all skills with category |
| GET | /skills/:id | Get one skill |

## Validation

`@IsNotEmpty()` is applied to: users (name, email, password), skill_categories (name), skills (name, categoryId).
An empty required field returns `400 Bad Request`.

## Migration commands

    npm run migration:generate -- src/migrations/<Name>
    npm run migration:run
    npm run migration:show
    npm run migration:revert

`synchronize` is `false`. Tables are created only by migrations.
