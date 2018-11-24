import axios from 'axios';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARDS = 'ADD_CARDS';
export const EDIT_CARD = 'EDIT_CARD';
const API_CARDS_URL = '/api/cards';


export const loadCards = () => {
    return dispatch => {
        return axios.get(API_CARDS_URL)
        .then(response => {
            console.log('this is the response data', response.data)
          const cards = response.data;
          dispatch({
              type: LOAD_CARDS,
              cards
          })
        })
        .catch(err => { console.log(err) });
    }
}

export const addCard = card => {
    return {
        type: ADD_CARDS,
        card
    }
}

// export const editCard = card => {
//     return {
//         type: EDIT_CARD,
//         card
//     }
// }

export const editCard = card => {
    // console.log('card', card.id)
    return dispatch => {
      return axios.put(`/api/cards/${card.id}`, card).then(response => {
        // console.log('response', response);
        dispatch({
          type: EDIT_CARD,
          editCard: response.data
        });
      });
    };
  };