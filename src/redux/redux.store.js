import filterReducer from '../facilities-filter/facilities-filter.reducer';
import searchReducer from '../search-results/search-results.reducer';
import sortingReducer from '../sorting/sorting.reducer';

import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  filters: filterReducer,
  items: searchReducer,
  sorting: sortingReducer
});

const store = createStore(reducer);

export default store;