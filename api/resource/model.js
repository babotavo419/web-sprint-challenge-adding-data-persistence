// build your `Resource` model here
const db = require('../../data/dbConfig');

function get() {
  return db('resources');
}

function getById(id) {
  return db('resources').where('resource_id', id).first();
}

function insert(resource) {
  return db('resources').insert(resource)
    .then(([resource_id]) => {
      return getById(resource_id);
    });
}

module.exports = {
  get,
  getById,
  insert
};
