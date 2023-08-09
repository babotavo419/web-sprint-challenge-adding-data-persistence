exports.up = function (knex) {
    return knex.schema.createTable('project_resources', table => {
      table.increments('id');
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('project_resources');
  };
  