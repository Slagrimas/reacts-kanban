import { combineReducers } from 'redux';

import cards from './cardList';
import isLoading from './loadingModal';

export default combineReducers({
    cards,
    isLoading,
})

