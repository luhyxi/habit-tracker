# Habit Tracker

A simple and effective habit tracking application to help you build and maintain good habits.

## 🚀 Technologies Used

- **Node.js** (Backend runtime)
- **TypeScript** (Type safety)
- **Express** (HTTP server)
- **Drizzle ORM** (Database ORM)
- **SQLite** (Local database)
- **Biome** (Linting/formatting)

## 📖 About

Habit Tracker is a backend service designed to help users track their daily habits. It provides endpoints to create, read, update, and delete habits, as well as to log daily progress. The project is structured for easy extensibility and maintainability, using modern TypeScript and database best practices.

## 🛠️ Setup & Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional, for containerized setup)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/habit-tracker.git
cd habit-tracker
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up the database

The project uses SQLite by default. The database file (`local.db`) will be created automatically.

If you want to run migrations manually, use:

```bash
# Example (adjust if you use a migration tool)
npm run migrate
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

The server should start on [http://localhost:3000](http://localhost:3000) by default.

### 5. Using Docker (optional)

To run the project using Docker Compose:

```bash
docker-compose up --build
```
