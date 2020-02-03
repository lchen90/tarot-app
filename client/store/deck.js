import axios from 'axios';

// ACTION TYPES

const GET_DECK = 'GET_DECK';

// ACTION CREATORS

const getDeck = deck => ({ type: GET_DECK, deck });
// THUNK

export const getDeckThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/deck');
      dispatch(getDeck(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DECK:
      return action.deck;
    default:
      return state;
  }
}
