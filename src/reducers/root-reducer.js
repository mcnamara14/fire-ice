import { combineReducers } from 'redux';
import { houseData } from './houseData';
import { houseSwornMembers } from './houseSwornMembers';

const rootReducer = combineReducers({
  houseData,
  houseSwornMembers
});


export default rootReducer;
