import filterReducer from '../facilities-filter/facilities-filter.reducer';
import searchReducer from '../search-results/search-results.reducer';

import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  filters: filterReducer,
  items: searchReducer
});

const store = createStore(reducer);

export default store;