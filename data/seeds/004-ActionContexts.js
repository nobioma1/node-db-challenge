exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actionContexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actionContexts').insert([
        { action_id: 1, context_id: 1 },
        { action_id: 1, context_id: 3 },
        { action_id: 2, context_id: 2 },
        { action_id: 3, context_id: 1 },
        { action_id: 3, context_id: 2 },
        { action_id: 4, context_id: 1 },
        { action_id: 4, context_id: 3 },
        { action_id: 5, context_id: 1 },
        { action_id: 5, context_id: 2 },
        { action_id: 5, context_id: 3 },
        { action_id: 6, context_id: 3 },
        { action_id: 6, context_id: 2 },
        { action_id: 7, context_id: 1 },
        { action_id: 7, context_id: 2 },
        { action_id: 7, context_id: 3 },
        { action_id: 8, context_id: 3 },
        { action_id: 9, context_id: 3 },
        { action_id: 9, context_id: 1 },
        { action_id: 9, context_id: 2 },
        { action_id: 10, context_id: 1 },
        { action_id: 10, context_id: 3 },
        { action_id: 11, context_id: 3 },
        { action_id: 12, context_id: 1 },
      ]);
    });
};
