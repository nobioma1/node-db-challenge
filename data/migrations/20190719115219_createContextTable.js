exports.up = function(knex) {
  return knex.schema.createTable('contexts', table => {
    table.increments();
    table
    .text('context')
    .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contexts');
};
