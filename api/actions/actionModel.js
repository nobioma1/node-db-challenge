const db = require('../../data/dbConfig');

module.exports = { addAction, getActionById, updateAction, removeAction };

function getActionById(actionId) {
  return db('actions')
    .where({ id: actionId })
    .first()
    .then(async res => {
      const contexts = await getContexts(actionId);
      res.action_complete = !!res.action_complete;
      res.contexts = contexts;
      return res;
    });
}

function getContexts(actionId) {
  return db('actionContexts')
    .select('actionContexts.id', 'contexts.context')
    .join('contexts', 'contexts.id', 'actionContexts.context_id')
    .where({ action_id: actionId });
}

function addAction(projectId, action) {
  const projectAction = {
    ...action,
    project_id: projectId,
  };
  return db('actions')
    .insert(projectAction)
    .then(([id]) => getActionById(id));
}

function updateAction(id, action) {
  return db('actions')
    .where({ id })
    .update(action)
    .then(() => getActionById(id));
}

function removeAction(id) {
  return db('actions')
    .where({ id })
    .del();
}
