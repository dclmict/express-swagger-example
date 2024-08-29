// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API with Swagger',
        version: '1.0.0',
        description: 'A simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
};

// Options for the swagger docs
module.exports = {
    swaggerDefinition,
    apis: ['./src/routes/*.js'], // Path to the API docs
};