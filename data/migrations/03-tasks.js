exports.up = function (knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('task_id');
      table.string('task_description').notNullable();
      table.string('task_notes');
      table.integer('task_completed').defaultTo(0);
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks');
  };
  