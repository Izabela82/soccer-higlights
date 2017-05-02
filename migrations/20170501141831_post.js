
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', (table)=>{
    table.increments()
    table.string('title')
    table.string('url')
    table.integer('votes').notNull().defaultTo(0)

  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('post')
};
