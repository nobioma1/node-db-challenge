const express = require('express');
const { getProject, addProject, updateProject, removeProject } = require('./projectModel.js');
const { validateProject, validateProjectId } = require('./projectMiddleware');

const projectRouter = express.Router();

projectRouter.get('/:id', validateProjectId, async (req, res) => {
  try {
    const project = await getProject(req.project.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Project' });
  }
});

projectRouter.post('/', validateProject, async (req, res) => {
  try {
    const project = await addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error adding Project' });
  }
});

projectRouter.put(
  '/:id',
  validateProjectId,
  validateProject,
  async (req, res) => {
    const { id } = req.project;
    console.log(id);
    console.log(req.body);
    try {
      const project = await updateProject(id, req.body);
      return res.status(200).json(project);
    } catch (error) {
      return res.status(500).json({ error: 'Error updating project' });
    }
  },
);
projectRouter.delete('/:id', validateProjectId, async (req, res) => {
  try {
    await removeProject(req.project.id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting project' });
  }
});

module.exports = projectRouter;
