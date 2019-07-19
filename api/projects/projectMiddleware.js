const { getProjectById } = require('./projectModel');

function validateProject(req, res, next) {
  const haveName = req.body.hasOwnProperty('project_name');
  const haveDescription = req.body.hasOwnProperty('project_description');

  if (!haveName || !haveDescription) {
    return res
      .status(400)
      .json({ error: `Fields 'project_name' and 'project_description' are required` });
  }

  if (!req.body.project_name.trim() || !req.body.project_description.trim()) {
    return res
      .status(400)
      .json({ error: `'project_name' and 'project_description' cannot be empty` });
  }

  next();
}

async function validateProjectId(req, res, next) {
  const { id } = req.params;
  try {
    const project = await getProjectById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project with ID does not exist' });
    }
    req.project = project;
  } catch (error) {
    return res.status(500).json({ error: 'Unable to get Project with ID' });
  }

  next();
}

module.exports = { validateProject, validateProjectId };
