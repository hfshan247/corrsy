import {combineReducers} from '@reduxjs/toolkit';
import videoReducer from '../reducers/videoRedcuer';

const rootReducer = combineReducers({
  userObject: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
