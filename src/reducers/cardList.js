import { LOAD_CARDS } from "../actions/cardActions";
import { ADD_CARDS } from "../actions/cardActions";
import { EDIT_CARD } from "../actions/cardActions";
import { DELETE_CARD } from "../actions/cardActions";

const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            return [...action.cards];

        case ADD_CARDS:
            console.log(action.card)
            return state = [...state, action.card]

        case EDIT_CARD:
            return [...state.filter(card => card.id !== action.card.id), Object.assign({}, action.card)]
            
        
        case DELETE_CARD:
            return [...action.cards];

        default:
            return state
    }
}

export default cardList;