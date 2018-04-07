import React from 'react';

import Redux from './redux/redux';
import store from './redux/redux.store';

const items = require('./data.json'); 

const App = () => <Redux items={items} store={store} />;

export default App;
