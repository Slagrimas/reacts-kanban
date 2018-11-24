import { LOAD_CARDS } from "../actions/cardActions";
import { ADD_CARDS } from "../actions/cardActions";
import { EDIT_CARD } from "../actions/cardActions";

const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
        console.log('action cards', action.cards)
            return [...action.cards]; //same as state = [...action.books] return state

        case ADD_CARDS:
            return [...state, action.card]

        // case EDIT_CARD:
        //     return action.payload;
        case EDIT_CARD:
      let zero = state[0];
      state.map(card => {
        if (card.id === Number(action.editCard.id)) {
          state.splice(state.indexOf(card), 1);
          state.push(action.editCard);
        }
      });
      return [...state];
        default:
            return state
    }
}

export default cardList;

