import {
  FETCH_AVAILBE_COUNTRES, FETCH_NEAREST_CITY, FETCH_STATE_IN_COUNTRY, FETCH_CITIES_IN_STATE, FETCH_SPECIFIED_DATA_FROM_CITY, WATCH_LIST,
} from '../actions/types';

const initialState = {
  watchList: [],
  avaibleCoutres: [],
  nearestCity: [],
  statesInCountry: [],
  citiesInState: [],
  specifiedDataFromCity: {
    id: 0,
    current: {
      weather: {},
      pollution: {},
    },
  },
};

export const chosenCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILBE_COUNTRES:
      const countryData = action.data;
      return {
        ...state,
        avaibleCoutres: [{ country: 'Choose a country' }, ...countryData],
      };
    case FETCH_NEAREST_CITY:
      return {
        ...state,
        nearestCity: action.data,
        specifiedDataFromCity: action.data,
      };
    case FETCH_STATE_IN_COUNTRY:
      const stateData = action.data;
      return {
        ...state,
        statesInCountry: [{ state: 'Choose a state' }, ...stateData],
      };
    case FETCH_CITIES_IN_STATE:
      const citiesData = action.data;
      return {
        ...state,
        citiesInState: [{ state: 'Choose a state' }, ...citiesData],
      };
    case FETCH_SPECIFIED_DATA_FROM_CITY:
      let { id } = state.specifiedDataFromCity;
      id === 0 ? id = 0 : id++;
      return {
        ...state,
        specifiedDataFromCity: {
          ...action.data,
          id,
        },
      };
    case WATCH_LIST:
      const specifiedData = state.specifiedDataFromCity;
      return {
        ...state,
        watchList: [...state.watchList, specifiedData],
      };
    default:
      return state;
  }
};

export default chosenCityReducer;
