import React from 'react';
import { shallow, mount } from 'enzyme';

import FacilitiesFilterForm, { styles } from './facilities-filter-form';
import FacilitiesFilterItem from './facilities-filter-item/facilities-filter-item';
import { types } from '../facilities-filter.actions';

describe('Facilities filter form', () => {
  const filters = {
    ['one']: true,
    ['two']: false
  };

  it('renders without crashing', () => {
    shallow(<FacilitiesFilterForm filters={filters} />);
  });

  it('can display a list of all facility options', () => {
    const wrapper = shallow(<FacilitiesFilterForm filters={filters} />);
    const facillityCount = wrapper
      .find(FacilitiesFilterItem)
      .length;

    expect(facillityCount).toEqual(2);
  });

  it('can raise a toggle filter action when receiving a click event from child', () => {
    const spy = jest.fn();
    const wrapper = mount(<FacilitiesFilterForm filters={filters} dispatch={spy} />);
    
    wrapper
      .find(FacilitiesFilterItem)
      .first()
      .find('input')
      .simulate('change');
    
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0].type).toEqual(types.toggleFilter);
  })

});
 