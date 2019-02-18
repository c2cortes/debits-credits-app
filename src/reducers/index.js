import { combineReducers } from 'redux';

import Debits from './reducerDebits';

const rootReducer = combineReducers({
  debits: Debits
});

export default rootReducer;