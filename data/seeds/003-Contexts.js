exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contexts').insert([
        { context: 'At Home' },
        { context: 'At Work' },
        { context: 'At Computer' },
      ]);
    });
};
