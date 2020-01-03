import cates from './cates/reducer';
import tasks from './tasks/reducer';
import { combineReducers } from 'redux';

export default combineReducers({cates, tasks});