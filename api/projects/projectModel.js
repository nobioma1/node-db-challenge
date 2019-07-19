const db = require('../../data/dbConfig');
module.exports = {
  getProject,
  addProject,
  getProjectById,
  updateProject,
  removeProject,
};

function getProjectAction(projectId) {
  return db('actions')
    .select('id', 'action_description', 'action_notes', 'action_complete')
    .where({ project_id: projectId })
    .then(res => {
      return res.map(action => ({
        ...action,
        action_complete: !!action.action_complete,
      }));
    });
}

function getProject(projectId) {
  return db('projects')
    .where({ id: projectId })
    .first()
    .then(async res => {
      try {
        res.project_complete = !!res.project_complete;
        const actions = await getProjectAction(projectId);
        if (actions) {
          res.actions = actions;
          return res;
        }
      } catch (error) {
        res.actions = [];
        return res;
      }
    });
}

function getProjectById(projectId) {
  return db('projects')
    .where({ id: projectId })
    .first()
    .then(res => {
      res.project_complete = !!res.project_complete;
      return res;
    });
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => getProject(id));
}

function updateProject(id, project) {
  return db('projects')
    .where({ id })
    .update(project)
    .then(() => getProjectById(id));
}

function removeProject(id) {
  return db('projects')
    .where({ id })
    .del();
}
