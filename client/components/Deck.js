import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDeckThunk } from '../store/deck';
import { Link } from 'react-router-dom';

const Deck = props => {
  const deck = useSelector(state => state.deck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeckThunk());
  }, [deck.length]);

  if (!deck.length) {
    return (
      <div>
        <p>'No Deck</p>
      </div>
    );
  } else {
    return (
      <div>
        {deck.map(card => (
          <ul key={card.id}>
            <Link to={`/deck/${card.id}`}>
              {' '}
              <p>{card.name}</p>{' '}
            </Link>
          </ul>
        ))}
      </div>
    );
  }
};

export default Deck;
