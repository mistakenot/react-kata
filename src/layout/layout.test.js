import React from 'react';
import { shallow } from 'enzyme';

import Layout from './layout';
import FilterForm from '../facilities-filter/facilities-filter-form/facilities-filter-form';
import SearchResults from '../search-results/search-results';
import Sorting from '../sorting/sorting';

describe('Layout component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = { 
      items: [],
      filters: {
        labels: [],
        states: []
      },
      dispatch: jest.fn()
    };
    
    wrapper = shallow(<Layout {...props} />);
  });

  it('renders filter component', () => {
    expect(wrapper.find(FilterForm)).toBeDefined();
  });

  it('renders search component', () => {
    expect(wrapper.find(SearchResults)).toBeDefined();
  });

  it('renders sorting component', () => {
    expect(wrapper.find(Sorting).length).toEqual(1);
  });

  it('dispatches event when form raises onToggleFilter event', () => {
    wrapper
      .find(FilterForm)
      .first()
      .props()
      .dispatch(1);

    const call = props.dispatch.mock.calls[0];
    expect(call).toEqual([1]);
  });

  it('dispatches event when sorting calls dispatch', () => {
    wrapper
      .find(Sorting)
      .first()
      .props()
      .dispatch(1);

    const call = props.dispatch.mock.calls[0];
    expect(call).toEqual([1]);
  });
});