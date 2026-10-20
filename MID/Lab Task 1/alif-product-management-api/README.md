# Product & Employee Management API (NestJS)

**Name:** Alif Shahriar Likhan  
**ID:** 23-53530-3  
**Section:** D  

## Tech Stack
NestJS, TypeORM, PostgreSQL

## Database Setup
1. Install PostgreSQL and open DBeaver.
2. Create a database named `shop_db` (or `alif_shop_db`).
3. Copy `.env.example` to `.env` and configure your database credentials.

## Installation & Run
```bash
npm install
npm run start:dev
```

Server runs at `http://localhost:3000`

## Endpoints

### Products
| Method | Endpoint | Description |
|---|---|---|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| PATCH | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

### Employees
| Method | Endpoint | Description |
|---|---|---|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get employee by ID |
| PATCH | /employees/:id | Update employee |
| DELETE | /employees/:id | Delete employee |

## Screenshots
Postman operation screenshots are stored in the `Screenshots/` folder.
