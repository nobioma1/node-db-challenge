const express = require('express');
const {} = require('./actionModel.js');

const actionRouter = express.Router();

actionRouter.get('/', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: '' });
  }
});

module.exports = actionRouter
