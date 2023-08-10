// build your `Task` model here
const db = require('../../data/dbConfig');

function get() {
  return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    .then(tasks => {
      return tasks.map(task => ({
        ...task,
        task_completed: task.task_completed === 1 ? true : false
      }));
    });
}

function getById(id) {
  return db('tasks').where('task_id', id).first()
    .then(task => {
      if (task) {
        return {
          ...task,
          task_completed: task.task_completed === 1 ? true : false
        };
      }
    });
}

function insert(task) {
  return db('tasks').insert(task)
    .then(([task_id]) => {
      return getById(task_id);
    });
}

module.exports = {
  get,
  getById,
  insert
};
