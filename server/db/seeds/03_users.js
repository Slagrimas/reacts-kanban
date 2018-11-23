exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Shad', last_name: 'Lagrimas', email: 'shad@gmail.com' },
        { id: 2, first_name: 'John', last_name: 'Doe', email: 'john@gmail.com' },
        { id: 3, first_name: 'Dwayne', last_name: 'Johnson', email: 'dwayne@gmail.com' }
      ]);
    });
};