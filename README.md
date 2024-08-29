# Express.js API with Swagger UI

This project demonstrates how to create a basic CRUD API using Express.js and document it using Swagger UI. Swagger UI provides a user-friendly interface to visualize and interact with the API's resources without having to manually test the endpoints using tools like Postman.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)


## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/dclmict/express-swagger-example.git
cd express-swagger-example
npm install
```

## Usage

To run the application locally:

```bash
node index.js
```

The server will start on `http://localhost:3000`.

- API Base URL: `http://localhost:3000`
- Swagger UI: `http://localhost:3000/api-docs`

## Project Structure

The project structure is as follows:

```
express-swagger
├── src
│   ├──routes/
│   │  └── users.js     # User routes and Swagger documentation
│   ├── index.js        # Main application file
│   └── swagger.js      # Swagger configuration file         
├── .gitignore.js       # Git ignore file
├── package-lock.js     # npm lock file   
└── package.json        # Project dependencies and scripts
```

## API Documentation

The API is documented using Swagger. After running the application, you can view the interactive API documentation at `http://localhost:3000/api-docs`.

### Endpoints

- **GET /users**: Retrieves a list of users.
- **GET /users/{id}**: Retrieves a user by their ID.
- **POST /users**: Creates a new user.

Each endpoint is documented with the necessary parameters, request bodies, and response formats.
