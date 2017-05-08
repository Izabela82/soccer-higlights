const environment  = process.env.NODE_ENV || 'development'

const config = require('../knexfile')[environment]

const pg = require('knex')(connection)

module.exports = pg
