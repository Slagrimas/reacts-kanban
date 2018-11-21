const environment = process.env.ENVRONMENT || 'development';
const config = require('../../knexfile')[environment];
module.exports = require('knex')(config);