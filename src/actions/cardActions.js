import axios from 'axios';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARDS = 'ADD_CARDS';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';
const API_CARDS_URL = '/api/cards';

export const loadCards = () => {
    return dispatch => {
        return axios.get(API_CARDS_URL)
            .then(response => {
                // console.log('this is the response data', response.data)
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
    console.log(card)
    return dispatch => {
       return axios.post(API_CARDS_URL, card)
       .then(response => {
        const card = response.data;
        dispatch({
            type: ADD_CARDS,
            card
        })
       })
       .catch(err => console.log(err))
    }
}

export const editCard = card => {
    return dispatch => {
        return axios.put(`/api/cards/${card.id}`, card)
            .then(response => {
                dispatch({
                    type: EDIT_CARD,
                    editCard: response.data
                })
            })
            .catch(err => console.log('this is console err', err))
    };
};

export const deleteCard = card => {
    return dispatch => {
      return axios.delete(`/api/cards/${card}`).then(response => {
        dispatch({
          type: DELETE_CARD,
          cards: response.data
        });
      });
    };
  };