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
    },
    dispatch: jest.fn()
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

  it('dispatches event when form raises onToggleFilter event', () => {
    const wrapper = shallow(<Layout {...props} />);
    
    wrapper
      .find(FilterForm)
      .first()
      .props()
      .onToggleFilter(1)

    const call = props.dispatch.mock.calls[0];
    expect(call).toEqual([1]);
  })
});