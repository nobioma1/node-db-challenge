const { getActionById } = require('./actionModel');

async function validateActionId(req, res, next) {
  const { id } = req.params;
  try {
    const action = await getActionById(id);
    if (!action) {
      return res.status(404).json({ error: 'Action with ID does not exist' });
    }
    req.action = action;
  } catch (error) {
    return res.status(500).json({ error: 'Unable to get action with ID' });
  }

  next();
}

function validateAction(req, res, next) {
  const haveNotes = req.body.hasOwnProperty('action_notes');
  const haveDescription = req.body.hasOwnProperty('action_description');

  if (!haveNotes || !haveDescription) {
    return res
      .status(400)
      .json({
        error: `Fields 'action_notes' and 'action_description' are required`,
      });
  }

  if (!req.body.action_notes.trim() || !req.body.action_description.trim()) {
    return res
      .status(400)
      .json({
        error: `'action_notes' and 'action_description' cannot be empty`,
      });
  }

  next();
}

module.exports = { validateAction, validateActionId };
