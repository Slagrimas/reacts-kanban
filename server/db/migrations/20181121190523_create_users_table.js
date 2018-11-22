
exports.up = function(knex, Promise) {
 return knex.schema.createTable('Users', function(table) {
    table.increments();
    table.string('first_name', 60).notNullable();
    table.string('last_name', 60).notNullable();
    table.string('email').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('Users');
};
