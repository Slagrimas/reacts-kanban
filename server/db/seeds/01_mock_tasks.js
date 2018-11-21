
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'Clean Car', body: 'Put your back into it', priority: 'low', status: 'Queue', createdBy: 'Jaynee', AssignedTo: 'Shad'},
        {id: 2, title: '', body: '', priority: '', status: '', createdBy: '', AssignedTo: ''},
        {id: 3, title: '', body: '', priority: '', status: '', createdBy: '', AssignedTo: ''},
        {id: 4, title: '', body: '', priority: '', status: '', createdBy: '', AssignedTo: ''},
        {id: 5, title: '', body: '', priority: '', status: '', createdBy: '', AssignedTo: ''},
        {id: 6, title: '', body: '', priority: '', status: '', createdBy: '', AssignedTo: ''}
      ]);
    });
};

//{
//   "id": 1,
//   "title": "Clean Car",
//   "body": "Put your back into it",
//   "priority": "low",
//   "status": "Queue",
//   "createdBy": "Jaynee",
//   "AssignedTo": "Shad"
// },
// {
//   "id": 6,
//   "title": "Plan 1st Birthday Party",
//   "body": "Slade's 1st Birthday",
//   "priority": "high",
//   "status": "Queue",
//   "createdBy": "BJ",
//   "AssignedTo": "Driana"
// },
// {
//   "id": 2,
//   "title": "Pay bills",
//   "body": "Credit card bills due this month",
//   "priority": "high",
//   "status": "In Progress",
//   "createdBy": "Bill",
//   "AssignedTo": "Rich"
// },
// {
//   "id": 4,
//   "title": "Go to work",
//   "body": "Earn money, don't be homeless",
//   "priority": "medium",
//   "status": "In Progress",
//   "createdBy": "Paul",
//   "AssignedTo": "Mark"
// },
// {
//   "id": 3,
//   "title": "Pick Up Breakfast",
//   "body": "Most important meal of the day",
//   "priority": "low",
//   "status": "Done",
//   "createdBy": "Sam",
//   "AssignedTo": "Leo"
// },
// {
//   "id": 5,
//   "title": "Pay Phone Bill",
//   "body": "Phones are important, must pay",
//   "priority": "high",
//   "status": "Done",
//   "createdBy": "Shad",
//   "AssignedTo": "Jay"