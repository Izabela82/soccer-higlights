const environment  = process.env.NODE_ENV || 'development'

const config = require('../knexfile')[environment]

const pg = require('knex')(config)

module.exports = pg
