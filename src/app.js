import React from 'react';

import Redux from './redux/redux';
import SearchResults from './search-results/search-results';
import FilterForm from './facilities-filter/facilities-filter-form';
import store from './redux/redux.store';

const items = require('./data.json'); 

const App = () => <Redux items={items} store={store} />;

export default App;
