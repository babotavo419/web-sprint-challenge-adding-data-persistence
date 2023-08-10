// build your `Project` model here
const db = require('../../data/dbConfig');

function get() {
  return db('projects').select('project_id', 'project_name', 'project_description', 'project_completed')
    .then(projects => {
      return projects.map(project => ({
        ...project,
        project_completed: project.project_completed === 1 ? true : false
      }));
    });
}

function getById(id) {
  return db('projects').where('project_id', id).first()
    .then(project => {
      if (project) {
        return {
          ...project,
          project_completed: project.project_completed === 1 ? true : false
        };
      }
    });
}

function insert(project) {
  return db('projects').insert(project)
    .then(([project_id]) => {
      return getById(project_id);
    });
}

module.exports = {
  get,
  getById,
  insert
};
