const express = require('express');
const {} = require('./projectModel.js');

const projectRouter = express.Router();

projectRouter.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: '' });
  }
});

module.exports = projectRouter
