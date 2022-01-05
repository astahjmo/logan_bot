
exports.up = function(knex) {
    return knex.schema
      .createTable('blacklist', function (table) {
        table.increments('id').primary();
        table.string('link').notNullable();
        table.int('rate').notNullable()
        table.timestamps('created_at');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('blacklist');
  }