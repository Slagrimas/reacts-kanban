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
        console.log('is state an array', state)
    //  const actionCard = state.map(card => {
        //   console.log('this is a card from reducer', card)
        //   console.log('this is the action', action)
        //   console.log('this is the edit card from reducer', editCar)
    //     if (card.id === Number(action.editCard.id)) {
    //         return[...action.editCard]
    //     } 
    //   });
      return [...state];
        default:
            return state
    }
}

export default cardList;

