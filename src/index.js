const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = require('./swagger');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Use swagger-ui-express for your app's documentation endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);

// A simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Swagger UI is available at http://localhost:${port}/api-docs`);
});
