// import { LOAD_BOOKS } from "../actions/bookActions";

const initialState = [];

const cardList = ( state = initialState, action) => {
switch (action.type) {
    case LOAD_BOOKS:
        return [ ...action.cards ]; //same as state = [...action.books] return state
    default:
    return state;
     
}
}

export default cardList;