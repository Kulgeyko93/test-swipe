import { combineReducers } from 'redux';
import { listReducer } from './reducers/listReducer';

export const rootReducer = combineReducers({
  list: listReducer,
});

export type RootState = ReturnType<typeof rootReducer>