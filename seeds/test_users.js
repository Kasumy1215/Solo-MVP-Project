
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Person A'},
        {id: 2, username: 'Person B'},
        {id: 3, username: 'Person C'}
      ]);
    });
};