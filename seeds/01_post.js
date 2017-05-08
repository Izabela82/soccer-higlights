
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {
          title:'Goal',
          votes: 35,
          url: "https://http://www.goal.com/en-us"
        },
        {
          title:'World Soccer',
          votes: 22,
          url: "http://www.worldsoccer.com/"
        },
        {
          title:'Fifa',
          votes: 43,
          url: "http://www.fifa.com/"
        },
        {
          title:'101 Great Goals',
          votes: 10,
          url: "http://www.101greatgoals.com/"
        },
        {
        title:'Sports Lens',
        votes: 13,
        url: "http://sportslens.com/"
      }

      ]);
    });
};
