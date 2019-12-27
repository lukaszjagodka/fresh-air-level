import { FETCH_AVAILBE_COUNTRES, FETCH_NEAREST_CITY } from '../actions/types';

const initialState = {
  avaibleCoutres: [],
  nearestCity: [],
};

export const chosenCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILBE_COUNTRES:
      console.log(FETCH_AVAILBE_COUNTRES, action.data);
      return {
        ...state,
        avaibleCoutres: action.data,
      };
    case FETCH_NEAREST_CITY:
      console.log(FETCH_NEAREST_CITY, action.data);
      return {
        ...state,
        nearestCity: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default chosenCityReducer;
