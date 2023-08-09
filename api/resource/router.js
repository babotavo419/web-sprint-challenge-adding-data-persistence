// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resources.get();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newResource = await Resources.insert(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});

// Error middleware - this can be placed at the end of the router to handle errors.
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
