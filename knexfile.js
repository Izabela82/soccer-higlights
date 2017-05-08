// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/soccer'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    },
    migrations: {
      tableName: 'knex_migrations'
    },

};
