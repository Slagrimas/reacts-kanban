export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
export const SET_LOADING_FALSE= 'SET_LOADING_FALSE';

export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE
  }
}

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE
  }
}