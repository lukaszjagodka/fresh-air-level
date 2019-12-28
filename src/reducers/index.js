import { combineReducers } from 'redux';
import { chosenCityReducer } from './chosenCityReducer';
import { choiceReducer } from './choiceReducer';

const rootReducer = combineReducers({
  chosenCityReducer,
  choiceReducer,
});

export default rootReducer;
