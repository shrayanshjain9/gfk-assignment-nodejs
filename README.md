# Node.js Post Management API

This is a simple Node.js application with CRUD (Create, Read, Update, Delete) functionality for managing posts. The application uses Express for the server, SQLite for the database, and TypeScript for code clarity.

### 1. Clone the Repository

```bash
git clone https://github.com/shrayanshjain9/gfk-assignment-nodejs.git
cd gfk-assignment-nodejs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup

The SQLite database is included in the repository (`db.sqlite`), and the necessary table and sample data are created automatically when the application starts.

### 4. Run the Application

#### Without Docker

```bash
npm start
```

Visit [http://localhost:9871](http://localhost:9871) in your browser or API client.

#### With Docker

```bash
npm run docker-build
npm run docker-run
```

The application will be running inside a Docker container. Access it at [http://localhost:9871](http://localhost:9871) in your browser or API client.

## API Endpoints

- **GET /api/posts**: Get all posts
- **GET /api/posts/:id**: Get a specific post by ID
- **POST /api/posts**: Create a new post
- **PUT /api/posts/:id**: Update a post by ID
- **DELETE /api/posts/:id**: Delete a post by ID
