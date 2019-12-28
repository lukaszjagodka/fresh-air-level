import {
  FETCH_AVAILBE_COUNTRES, FETCH_NEAREST_CITY, FETCH_STATE_IN_COUNTRY, FETCH_CITIES_IN_STATE, FETCH_SPECIFIED_DATA_FROM_CITY,
} from '../actions/types';

const initialState = {
  avaibleCoutres: [],
  nearestCity: [],
  statesInCountry: [],
  citiesInState: [],
  specyfiedDataFromCity: []
};

export const chosenCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILBE_COUNTRES:
      return {
        ...state,
        avaibleCoutres: action.data,
      };
    case FETCH_NEAREST_CITY:
      return {
        ...state,
        nearestCity: action.data,
      };
    case FETCH_STATE_IN_COUNTRY:
      return {
        ...state,
        statesInCountry: action.data,
      };
    case FETCH_CITIES_IN_STATE:
      return {
        ...state,
        citiesInState: action.data,
      };
    case FETCH_SPECIFIED_DATA_FROM_CITY:
      return {
        ...state,
        specyfiedDataFromCity: action.data
      }
    default:
      return state;
  }
};

export default chosenCityReducer;
