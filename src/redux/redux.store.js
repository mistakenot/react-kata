import reducer from '../facilities-filter/facilities-filter.reducer';
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;