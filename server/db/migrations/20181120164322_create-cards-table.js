
exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', function (table) {
        table.increments();
        table.string('title', 60).notNullable();
        table.string('body', 120).notNullable();
        table.string('priority').notNullable();
        table.string('status').notNullable();
        table.string('createdBy').notNullable();
        table.string('AssignedTo').notNullable();
      })
};

exports.down = function (knex, Promise) {
return knex.schema.dropTable('tasks')
};
