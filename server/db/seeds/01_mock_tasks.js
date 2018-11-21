
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, title: 'Clean Car', body: 'Put your back into it', priority: 'low', status: 'Queue', createdBy: 'Jaynee', AssignedTo: 'Shad'},
        {id: 2, title: 'Plan 1st Birthday Party', body: 'Slade 1st Birthday', priority: 'high', status: 'Queue', createdBy: 'BJ', AssignedTo: 'Driana'},
        {id: 3, title: 'Pay bills', body: 'Credit card bills due this month', priority: 'high', status: 'In Progress', createdBy: 'Bill', AssignedTo: 'Rich'},
        {id: 4, title: 'Go to work', body: 'Earn money, dont be homeless', priority: 'medium', status: 'In Progress', createdBy: 'Sam', AssignedTo: 'Leo'},
        {id: 5, title: 'Pick Up Breakfast', body: 'Most important meal of the day', priority: 'low', status: 'Done', createdBy: 'Lagrimas', AssignedTo: 'Lorenzo'},
        {id: 6, title: 'groceries shopping', body: 'Pick up food for the week', priority: 'medium', status: 'done', createdBy: 'John', AssignedTo: 'Doe'}
      ]);
    });
};

