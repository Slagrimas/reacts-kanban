const bookshelf = require('./bookshelf');

class Book extends bookshelf.Model {
  get tableName() { return 'tasks'; }
}

module.exports = bookshelf.model('Card', Card);