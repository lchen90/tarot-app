const Sequelize = require('sequelize')
const db = require('../db')

const Deck = db.define('card', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  rank: {
    type: Sequelize.INTEGER
  },
  suit: {
    type: Sequelize.STRING
  },
  meanings: {
    type: Sequelize.HSTORE
  },
  keywords: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  fortuneTelling: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Deck
