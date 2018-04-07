import filterReducer from '../facilities-filter/facilities-filter.reducer';
import searchReducer from '../search-results/search-results.reducer';

import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  enabledFilters: filterReducer,
  items: searchReducer
});

const store = createStore(reducer);

export default store;