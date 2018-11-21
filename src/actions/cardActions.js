export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARDS = 'ADD_CARDS';
export const EDIT_CARD = 'EDIT_CARD';

export const loadCards = (cards) => {
    return {
        type: LOAD_CARDS,
        cards: cards
    }
}

export const addCard = card => {
    return {
        type: ADD_CARDS,
        card
    }
}

export const editCard = card => {
    return {
        type: EDIT_CARD,
        card
    }
}