
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Cards', function (table) {
        table.increments();
        table.string('title', 255).notNullable();
        table.string('body', 255).notNullable();
        table.integer('priority_id').refrences('priorities.id').notNullable();
        table.integer('status_id').refrences('statuses.id').notNullable();
        table.integer('createdBy').refrences('users.id').notNullable();
        table.integer('AssignedTo').refrences('users.id').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
};

exports.down = function (knex, Promise) {
return knex.schema.dropTable('Cards')
};
// exports.up = function(knex, Promise) {
//     return knex.schema.createTable('cards', table => {
//       table.increments();
//       table.string('title', 255).notNullable();
//       table.string('body', 1024).notNullable();
//       table
//         .integer('priority_id')
//         .references('priorities.id')
//         .notNullable();
//       table
//         .integer('status_id')
//         .references('statuses.id')
//         .notNullable();
//       table
//         .integer('created_by')
//         .references('users.id')
//         .notNullable();
//       table
//         .integer('assigned_to')
//         .references('users.id')
//         .nullable();
//       table.timestamps(true, true);
//     });
//   };