exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table
      .text('project_name', 125)
      .unique()
      .notNullable();
    table.text('project_description');
    table.boolean('project_complete');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
