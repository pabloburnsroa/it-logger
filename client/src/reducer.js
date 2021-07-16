import { combineReducers } from 'redux';
import logsReducer from './features/logs/logsSlice';
import techReducer from './features/techs/techSlice';

export default combineReducers({
  log: logsReducer,
  tech: techReducer,
});
