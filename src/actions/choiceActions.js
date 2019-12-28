import { FETCH_COUNTRY, FETCH_STATE, FETCH_CITY } from './types';

export const chosenCountry = (value) => ({
  type: FETCH_COUNTRY,
  value,
});

export const chosenState = (value) => ({
  type: FETCH_STATE,
  value,
});

export const chosenCity = (value) => ({
  type: FETCH_CITY,
  value,
})