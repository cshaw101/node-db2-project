exports.up = function (knex) {
  // DO YOUR MAGIC
return knex.schema.createTable('cars', tbl => {
  tbl.increments('id');
  tbl.text('vin', 50).unique().notNullable();
  tbl.text('make',30).notNullable();
  tbl.integer('mileage').notNullable();
  tbl.text('title');
  tbl.text('transmission');
})
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars');
};

