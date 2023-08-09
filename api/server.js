const express = require('express');

const server = express();

// Import the routers
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');

server.use(express.json());

// Attach the routers to specific endpoints
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

module.exports = server;

