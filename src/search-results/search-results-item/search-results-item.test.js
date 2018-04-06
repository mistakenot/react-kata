import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsItem, { styles } from './search-results-item.js';

describe('Search Results Item', () => {
  const item = {
    Name: "hotelone",
    StarRating: 5,
    Facilities: ["car park", "pool"]
  };

  it('renders without crashing', () => {
    shallow(<SearchResultsItem {...item} />);
  });

  it('displays a name', () => {
    const wrapper = shallow(<SearchResultsItem {...item}  />);
    const resultItemNames = wrapper
      .find('.' + styles.searchResultsItemName)
      .first()
      .text()

    expect(resultItemNames).toEqual(item.Name);
  });

  it('displays a star rating', () => {
    const wrapper = shallow(<SearchResultsItem {...item}  />);
    const resultItemNames = wrapper
      .find('.' + styles.searchResultsItemRating)
      .first()
      .text()

    expect(resultItemNames).toEqual(item.StarRating.toString());
  });

  it('displays facilities', () => {
    const wrapper = shallow(<SearchResultsItem {...item}  />);
    const resultItemNames = wrapper
      .find('.' + styles.searchResultsItemFacility)
      .map(e => e.text());

    expect(resultItemNames).toEqual(item.Facilities);
  });

  it('displays with no facilities', () => {
    const itemWithNoFacilities = {...item, Facilities: []};
    const wrapper = shallow(<SearchResultsItem {...itemWithNoFacilities}  />);
    const resultItemNames = wrapper
      .find('.' + styles.searchResultsItemFacility)
      .map(e => e.text());

    expect(resultItemNames).toEqual([]);
  });
  
});