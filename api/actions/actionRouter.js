const express = require('express');
const { addAction, updateAction, removeAction, getActionById } = require('./actionModel');
const { validateActionId, validateAction } = require('./actionMiddleware');

const actionRouter = express.Router();

actionRouter.post('/:projectId', validateAction, async (req, res) => {
  const projectId = req.params.projectId;
  try {
    const action = await addAction(projectId, req.body);
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({ error: 'Error adding Action' });
  }
});

actionRouter.put('/:id', validateActionId, validateAction, async (req, res) => {
  const { id } = req.action;

  try {
    const actionId = await updateAction(id, req.body);
    return res.status(200).json(actionId);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating action' });
  }
});

actionRouter.delete('/:id', validateActionId, async (req, res) => {
  try {
    await removeAction(req.action.id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting action' });
  }
});

actionRouter.get('/:id', validateActionId, async (req, res) => {
  try {
    const action = await getActionById(req.action.id);
    return res.status(200).json(action);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting action' });
  }
});

module.exports = actionRouter;
