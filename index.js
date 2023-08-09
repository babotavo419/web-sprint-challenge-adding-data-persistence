// start your server here
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers
const projectRouter = require('./api/project/router');
const resourceRouter = require('./api/resource/router');
const taskRouter = require('./api/task/router');

const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

// Routers
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

// Test Endpoint
server.get('/', (req, res) => {
    res.json({ message: 'API is up and running!' });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server; // for testing purposes
