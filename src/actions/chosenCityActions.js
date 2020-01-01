import {
  FETCH_AVAILBE_COUNTRES, FETCH_NEAREST_CITY, FETCH_STATE_IN_COUNTRY, FETCH_CITIES_IN_STATE, FETCH_SPECIFIED_DATA_FROM_CITY, WATCH_LIST,
} from './types';
import { API_KEY } from '../config/config';

export const fetchAvaibleCountres = () => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/countries?key=${API_KEY}`)
    .then((res) => res.json())
    .then((updateAvaibleCountres) => {
      console.log(updateAvaibleCountres, 'downloaded countries');
      if (updateAvaibleCountres) {
        dispatch({
          type: FETCH_AVAILBE_COUNTRES,
          data: updateAvaibleCountres.data,
        });
      }
    }).catch((err) => {
      window.alert(err);
      window.location.reload();
    });
};

export const fetchNearestCity = () => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        dispatch({
          type: FETCH_NEAREST_CITY,
          data: res.data,
        });
      }
    }).catch((err) => {
      console.log(err);
    });
};
// Error for Nepal, Eastern region
export const fetchCitiesInState = (stateSelected, countrySelected) => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/cities?state=${stateSelected}&country=${countrySelected}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      res.data.message === 'call_per_minute_limit_reached' ? (
        window.alert('To many call per minute. Limit reached. Wait a few second.')
      ) : null
      && res.status === 'fail' ? (
          window.alert('There are no active cities in this region. Choose a different one or change a country.')
        && dispatch(clearCountry())
        && dispatch(clearState())
        && dispatch(clearCityFromCountry())
        && dispatch(checkFnc())
        ) : (
          dispatch({
            type: FETCH_CITIES_IN_STATE,
            data: res.data,
          })
        );
    }).catch((err) => {
      console.log(err);
      dispatch(fetchCitiesInState(stateSelected, countrySelected));
    });
};

export const clearCity = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_CITY',
    data: '',
  });
  const state = getState().choiceReducer.chosenState;
  const country = getState().choiceReducer.chosenCountry;
  dispatch(fetchCitiesInState(state, country));
};

export const clearCityFromCountry = () => (dispatch) => {
  dispatch({
    type: 'FETCH_CITY',
    data: '',
  });
};

export const clearState = () => (dispatch) => {
  dispatch({
    type: 'FETCH_STATE',
    data: '',
  });
};

export const clearCountry = () => (dispatch) => {
  dispatch({
    type: 'FETCH_COUNTRY',
    data: '',
  });
};

export const fetchStatesInCountry = (country) => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/states?country=${country}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        dispatch({
          type: FETCH_STATE_IN_COUNTRY,
          data: data.data,
        });
      }
    }).catch((err) => {
      console.log(err, 'StateInCountry');
      dispatch(fetchStatesInCountry(country));
    });
};

export const clearStateAndCity = () => (dispatch, getState) => {
  const country = getState().choiceReducer.chosenCountry;
  dispatch(clearState());
  dispatch(clearCityFromCountry());
  dispatch(fetchStatesInCountry(country));
};

export const fetchSpecifiedDataFromCity = (citySelected, stateSelected, countrySelected) => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/city?city=${citySelected}&state=${stateSelected}&country=${countrySelected}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      res.data.message === 'call_per_minute_limit_reached' ? (
        window.alert('To many call per minute. Limit reached. Wait a few second.')
      ) : null
      && res.status === 'fail' ? (
          window.alert('There are no active cities in this region. Choose a different one or change a country.')
        && dispatch(clearCountry())
        && dispatch(clearState())
        && dispatch(clearCityFromCountry())
        && dispatch(checkFnc())
        ) : (
          dispatch({
              type: FETCH_SPECIFIED_DATA_FROM_CITY,
              data: res.data,
            }) &&
        res.data ? (window.localStorage.setItem('specifiedDataFromCity', JSON.stringify(res.data))) : (localStorage.clear())
        )
    }).catch((err) => {
      console.log(err);
      dispatch(fetchSpecifiedDataFromCity(citySelected, stateSelected, countrySelected));
    });
};

export const clearSpecifiedData = () => (dispatch) => {
  dispatch({
    type: FETCH_SPECIFIED_DATA_FROM_CITY,
    data: '',
  });
};

// toDelete
export const checkFnc = () => (dispatch, getState) => {
  const country = getState().choiceReducer.chosenCountry;
  const state = getState().choiceReducer.chosenState;
  const city = getState().choiceReducer.chosenCity;
  console.log(country, state, city);
};

export const lastClear = () => (dispatch, getState) => {
  const country = getState().choiceReducer.chosenCountry;
  const state = getState().choiceReducer.chosenState;
  const city = getState().choiceReducer.chosenCity;
  dispatch(fetchSpecifiedDataFromCity(city, state, country));
  dispatch(clearCountry());
  dispatch(clearState());
  dispatch(clearCityFromCountry());
  console.log('CLEAR county state city');
  dispatch(checkFnc());
  // dispatch(clearSpecifiedData());
};

export const loadLocalStorage = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('specifiedDataFromCity'));
  if (data) {
    dispatch({
      type: FETCH_SPECIFIED_DATA_FROM_CITY,
      data,
    });
  }
};

export const watchList = (data) => ({
  type: WATCH_LIST,
  data,
});
