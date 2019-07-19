exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Build Inventory System',
          project_description:
            'This is a web app that helps user track items they bought.',
          project_complete: false,
        },
        {
          id: 2,
          project_name: 'Build API for projects and actions',
          project_description:
            'This is a sprint challenge that contains this text.',
          project_complete: true,
        },
        {
          id: 3,
          project_name: 'Build Insta-Clone',
          project_description:
            'This React project that clones just part of the instagram app',
          project_complete: true,
        },
        {
          id: 4,
          project_name: 'Create a Chat-Bot',
          project_description:
            'This is a Python App. that utilizes machine learning',
          project_complete: false,
        },
      ]);
    });
};
