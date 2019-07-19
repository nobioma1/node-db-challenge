exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          action_description: 'Draft User Interface',
          action_notes: 'Use Material-UI or Semantic-CSS',
          action_complete: true,
          project_id: 1,
        },
        {
          id: 2,
          action_description: 'Setup Firebase DB',
          action_notes: '',
          action_complete: true,
          project_id: 1,
        },
        {
          id: 3,
          action_description: 'Setup Create-React-App',
          action_notes:
            'Install Firebase, React-Router-dom, React-Redux, React-Thunk',
          action_complete: false,
          project_id: 1,
        },
        {
          id: 4,
          action_description: 'Setup Express Application and Router',
          action_notes: 'Setup Router for actions and Projects ',
          action_complete: true,
          project_id: 2,
        },
        {
          id: 5,
          action_description: 'Install dependencies ',
          action_notes: 'Knex, sqlite, helmet, nodemon',
          action_complete: true,
          project_id: 2,
        },
        {
          id: 6,
          action_description: 'Create Migrations and Seeds',
          action_notes: 'Create Migrations and Seeds for projects and actions',
          action_complete: false,
          project_id: 2,
        },
        {
          id: 7,
          action_description: 'Write Endpoints',
          action_notes: 'Use Async/Await for asynchronous operations',
          action_complete: false,
          project_id: 2,
        },
        {
          id: 8,
          action_description: 'Create Instagram Login page',
          action_notes: 'Use flex-box',
          action_complete: true,
          project_id: 3,
        },
        {
          id: 9,
          action_description: 'Create the Post Component',
          action_notes: '',
          action_complete: false,
          project_id: 3,
        },
        {
          id: 10,
          action_description: 'Create the Like button effect',
          action_notes: 'Use font-awesome fa-heart for icon',
          action_complete: false,
          project_id: 3,
        },
        {
          id: 11,
          action_description: 'Create comment section',
          action_notes: '',
          action_complete: false,
          project_id: 3,
        },
        {
          id: 12,
          action_description: 'Research on machine-learning',
          action_notes: '',
          action_complete: false,
          project_id: 4,
        },
      ]);
    });
};
