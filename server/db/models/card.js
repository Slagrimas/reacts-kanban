const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'tasks'; }
}

module.exports = bookshelf.model('Card', Card);