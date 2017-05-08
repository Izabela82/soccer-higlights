const environment = process.env.NODE_ENV ||

const config = require('../knexfile')

const  deploy_environment  = process.env.DATABASE_URL || 'development'
const connection = config[deploy_environment]

const pg = require('knex')(connection)

module.exports = pg
