import {
  FETCH_AVAILBE_COUNTRES, FETCH_NEAREST_CITY, FETCH_STATE_IN_COUNTRY, FETCH_CITIES_IN_STATE, FETCH_SPECIFIED_DATA_FROM_CITY,
} from './types';
import { API_KEY } from '../config/config';

export const fetchAvaibleCountres = () => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/countries?key=${API_KEY}`)
    .then((res) => res.json())
    .then((updateAvaibleCountres) => {
      if (updateAvaibleCountres) {
        dispatch({
          type: FETCH_AVAILBE_COUNTRES,
          data: updateAvaibleCountres.data,
        });
      }
    }).catch((err) => console.log(err));
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

export const fetchStatesInCountry = (country) => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/states?country=${country}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data) {
        dispatch({
          type: FETCH_STATE_IN_COUNTRY,
          data: data.data,
        });
      }
    }).catch((err) => {
      console.log(err);
    });
};

export const fetchCitiesInState = (stateSelected, countrySelected) => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/cities?state=${stateSelected}&country=${countrySelected}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: FETCH_CITIES_IN_STATE,
        data: res.data,
      });
    }).catch((err) => {
      console.log(err);
    });
};

export const fetchSpecifiedDataFromCity = (citySelected, stateSelected, countrySelected) => (dispatch) => {
  fetch(`http://api.airvisual.com/v2/city?city=${citySelected}&state=${stateSelected}&country=${countrySelected}&key=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: FETCH_SPECIFIED_DATA_FROM_CITY,
        data: res.data,
      });
    }).catch((err) => console.log(err));
};
