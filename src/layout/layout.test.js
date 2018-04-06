import React from 'react';
import { shallow } from 'enzyme';

import Layout from './layout';
import FilterForm from '../facilities-filter/facilities-filter-form';
import SearchResults from '../search-results/search-results';

describe('Layout component', () => {
  const props = { 
    items: [],
    filters: {
      labels: [],
      states: []
    }
  };

  it('renders without crashing', () => {
    shallow(<Layout {...props} />);
  });

  it('renders filter component', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper.find(FilterForm)).toBeDefined();
  });

  it('renders search component', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper.find(SearchResults)).toBeDefined();
  });
});