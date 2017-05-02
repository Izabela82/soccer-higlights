
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          post_id: 1,
          comments: " Hello"
        },
        {
          post_id: 2,
          comments: "Super cool!"
        },
        {
          post_id: 3,
          comments: " Blah!"
          }
      ]);
    });
};
