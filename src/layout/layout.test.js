import React from 'react';
import { shallow } from 'enzyme';

import Layout from './layout';
import FilterForm from '../facilities-filter/facilities-filter-form/facilities-filter-form';
import SearchResults from '../search-results/search-results';

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
    expect(wrapper.find('.sorting').length).toEqual(1);
  });

  it('dispatches sort event on clicking sort', () => {
    wrapper
      .find('.sorting')
      .simulate('click');
    
    expect(props.dispatch.mock.calls[0]).toEqual(['CLICK_SORT']);
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