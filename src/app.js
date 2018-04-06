import React, { Component } from 'react';

import Redux from './redux/redux';
import SearchResults from './search-results/search-results';
import FilterForm from './facilities-filter/facilities-filter-form';

const items = require('./data.json'); 

const App = () => <Redux items={items} />;

export default App;
