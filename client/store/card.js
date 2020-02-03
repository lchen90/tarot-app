import axios from 'axios';

// ACTION TYPES
const GET_CARD = 'GET_CARD';

// ACTION CREATOR
const getCard = card => ({ type: getCard, card });

// THUNK

const getCardThunk = cardId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/deck/${cardId}`);
      dispatch(getCard(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//default state

const initialState = {};

// REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD:
      return action.card;
    default:
      return state;
  }
}
