import { combineReducers } from 'redux';

import Movements from './reducerMovements';

const rootReducer = combineReducers({
  movements: Movements
});

export default rootReducer;