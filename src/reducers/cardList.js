import { LOAD_CARDS } from "../actions/cardActions";
import { ADD_CARDS } from "../actions/cardActions";
import { EDIT_CARD } from "../actions/cardActions";
import { DELETE_CARD } from "../actions/cardActions"

const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:

            return [...action.cards]; 

        case ADD_CARDS:
            return [...state, action.card]

        case EDIT_CARD:
            state.map(card => {
                if (card.id === action.editCard.id) {
                    state.splice(state.indexOf(card), 1);
                    state.push(action.editCard);
                }
            });
            
            return [...state];

        case DELETE_CARD:
            return [...action.cards];


        default:
            return state
    }
}

export default cardList;

