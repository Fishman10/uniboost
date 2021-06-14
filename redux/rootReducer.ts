import { combineReducers } from 'redux';
import { listsReducer } from '../redux/listsReducer';

export const rootReducer = combineReducers({
  lists: listsReducer,
});
