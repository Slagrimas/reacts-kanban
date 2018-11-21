import { LOAD_CARDS } from "../actions/cardActions";
import { ADD_CARDS } from "../actions/cardActions";

const initialState = [];

const cardList = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            return [...action.cards]; //same as state = [...action.books] return state

        case ADD_CARDS:
            return [...state, action.card]
        default:
            return state
    }
}

export default cardList;

