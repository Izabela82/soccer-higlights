
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {
          title:'Google',
          votes: 35,
          url: "https://www.google.com"
        },
        {
          title:'Globo',
          votes: 22,
          url: "https://www.globo.com"
        },
        {
          title:'yahoo',
          votes: 13,
          url: "https://www.yahoo.com"
        }
      ]);
    });
};
