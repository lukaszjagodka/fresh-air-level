import { FETCH_COUNTRY, FETCH_STATE, FETCH_CITY } from '../actions/types';

const initialState = {
  chosenCountry: '',
  chosenState: '',
  chosenCity: ''
};

export const choiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,
        chosenCountry: action.value,
      };
    case FETCH_STATE:
      return {
        ...state,
        chosenState: action.value,
      };
    case FETCH_CITY:
      return {
        ...state,
        chosenCity: action.value
      }
    default:
      return state;
  }
};
export default choiceReducer;
