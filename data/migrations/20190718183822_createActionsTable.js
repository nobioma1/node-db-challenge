exports.up = function(knex) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.text('action_description').notNullable();
    table.text('action_notes');
    table
      .boolean('action_complete')
      .notNullable()
      .defaultTo(false);
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('actions');
};
