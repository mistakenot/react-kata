import React from 'react';
import { shallow } from 'enzyme';

import SearchResults, { styles } from './search-results.js';

describe('Search Results', () => {
  
  it('renders without crashing', () => {
    const items = [];
    
    shallow(<SearchResults resultItems={items} />);
  });

  it('displays a representation of each child item', () => {
    const items = [0,1,2];
    const wrapper = shallow(<SearchResults resultItems={items} />)
    const resultItemCount = wrapper.find('.' + styles.searchResultsItem).length;
    
    expect(resultItemCount).toEqual(items.length);
  });

});