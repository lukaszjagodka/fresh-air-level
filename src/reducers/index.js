import { combineReducers } from 'redux';
import { chosenCityReducer } from './chosenCityReducer';

const rootReducer = combineReducers({
  chosenCityReducer,
});

export default rootReducer;
