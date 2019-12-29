import {
  FETCH_AVAILBE_COUNTRES, FETCH_NEAREST_CITY, FETCH_STATE_IN_COUNTRY, FETCH_CITIES_IN_STATE, FETCH_SPECIFIED_DATA_FROM_CITY,
} from '../actions/types';

const initialState = {
  avaibleCoutres: [],
  nearestCity: [],
  statesInCountry: [],
  citiesInState: [],
  specifiedDataFromCity: {
    current: {
      weather: {},
      pollution: {},
    },
  },
};

export const chosenCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILBE_COUNTRES:
      console.log(action.data);
      return {
        ...state,
        avaibleCoutres: [{country: 'Choose a country'}, ...action.data],
      };
    case FETCH_NEAREST_CITY:
      return {
        ...state,
        nearestCity: action.data,
      };
    case FETCH_STATE_IN_COUNTRY:
      console.log(action.data);
      return {
        ...state,
        statesInCountry: [{state: 'Choose a state'}, ...action.data],
      };
    case FETCH_CITIES_IN_STATE:
      console.log(action.data);
      return {
        ...state,
        citiesInState: [{city: 'Choose a city'}, ...action.data],
      };
    case FETCH_SPECIFIED_DATA_FROM_CITY:
      console.log(action.data);
      return {
        ...state,
        specifiedDataFromCity: action.data,
      };
    default:
      return state;
  }
};

export default chosenCityReducer;
