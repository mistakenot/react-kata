import React from 'react';
import { shallow } from 'enzyme';

import SearchResults from './search-results.js';
import SearchResultsItem from './search-results-item/search-results-item.js';

describe('Search Results', () => {
  
  it('renders without crashing', () => {
    const items = [];
    
    shallow(<SearchResults resultItems={items} />);
  });

  it('displays a representation of each result item', () => {
    const items = [
    {
      Name: "hotelone",
      StarRating: 5,
      Facilities: ["car park", "pool"]
    },
    {
      Name: "hoteltwo",
      StarRating: 2,
      Facilities: ["pool"]
    }];

    const wrapper = shallow(<SearchResults resultItems={items} />);
    const resultItemCount = wrapper.find(SearchResultsItem).length;
    
    expect(resultItemCount).toEqual(items.length);
  });

  it('displays a representation of an empty result item list', () => {
    const wrapper = shallow(<SearchResults resultItems={[]} />);
    const resultItemCount = wrapper.find(SearchResultsItem).length;
    
    expect(resultItemCount).toEqual(0);
  });

});