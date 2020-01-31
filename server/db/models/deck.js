const Sequelize = require('sequelize');
const db = require('../db');

const Deck = db.define('deck', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  rank: {
    type: Sequelize.STRING,
  },
  suit: {
    type: Sequelize.STRING,
  },
  light: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  shadow: { type: Sequelize.ARRAY(Sequelize.STRING) },
  keywords: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  fortune_telling: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Deck;
