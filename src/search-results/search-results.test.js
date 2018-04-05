import React from 'react';
import { shallow } from 'enzyme';

import { SearchResults } from './search-results.js';

describe('Search Results', () => {
  
  it('renders without crashing', () => {
    shallow(<SearchResults />);
  });

});