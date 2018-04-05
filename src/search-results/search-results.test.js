import React from 'react';
import { shallow } from 'enzyme';

import SearchResults, { styles } from './search-results.js';

describe('Search Results', () => {
  
  it('renders without crashing', () => {
    const items = [];
    
    shallow(<SearchResults resultItems={items} />);
  });

  it('displays a representation of each result item', () => {
    const items = [0,1,2];
    const wrapper = shallow(<SearchResults resultItems={items} />);
    const resultItemCount = wrapper.find('.' + styles.searchResultsItem).length;
    
    expect(resultItemCount).toEqual(items.length);
  });

  it('displays a name for each result item', () => {
    const items = [
      {Name: 'bob'},
      {Name: 'alice'}
    ]
    const wrapper = shallow(<SearchResults resultItems={items} />);
    const resultItemNames = wrapper
      .find('.' + styles.searchResultsItemName + ' p')
      .map(resultItem => resultItem.text());

    const expected = items.map(i => i.Name);

    expect(resultItemNames).toEqual(expected);
  });  

});