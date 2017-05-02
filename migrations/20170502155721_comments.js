exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=>{
    table.increments()
    table.string('comments')
    table.integer('post_id').references('id').inTable('post')


  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('comments')
};
