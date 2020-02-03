const router = require('express').Router();
const { Deck } = require('../db/models/index');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const deck = await Deck.findAll();
    res.json(deck);
  } catch (err) {
    next(err);
  }
});

router.get('/:cardId', async (req, res, next) => {
  try {
    const card = await Deck.findByPk(Number(req.params.cardId));
    res.json(card);
  } catch (err) {
    next(err);
  }
});
