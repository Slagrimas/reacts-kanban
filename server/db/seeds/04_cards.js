
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, title: 'Clean Car', body: 'Put your back into it', priority_id: 1, status_id: 2, created_by: 1, assigned_to: 2},
        {id: 2, title: 'Plan 1st Birthday Party', body: 'Slade 1st Birthday', priority_id: 2, status_id: 1, created_by: 2, assigned_to: 3},
        {id: 3, title: 'Pay bills', body: 'Credit card bills due this month', priority_id: 1, status_id: 3, created_by: 3, assigned_to: 2},
        {id: 4, title: 'Go to work', body: 'Earn money, dont be homeless', priority_id: 3, status_id: 2, created_by: 2, assigned_to: 1},
        {id: 5, title: 'Pick Up Breakfast', body: 'Most important meal of the day', priority_id: 3, status_id: 1, created_by: 2, assigned_to: 1},
        {id: 6, title: 'groceries shopping', body: 'Pick up food for the week', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 3}
      ]);
    });
};

