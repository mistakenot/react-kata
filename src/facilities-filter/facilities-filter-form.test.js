import React from 'react';
import { shallow, mount } from 'enzyme';

import FacilitiesFilterForm, { styles } from './facilities-filter-form';
import FacilitiesFilter from './facilities-filter';
import { types } from './facilities-filter.actions';

describe('Facilities filter form', () => {
  const facilities = ['one', 'two', 'three'];
  const statuses = [true, false, true];

  it('renders without crashing', () => {
    shallow(<FacilitiesFilterForm labels={facilities} statuses={statuses} />);
  });

  it('can display a list of all facility options', () => {
    const wrapper = shallow(<FacilitiesFilterForm labels={facilities} statuses={statuses} />);
    const facillityCount = wrapper
      .find(FacilitiesFilter)
      .length;

    expect(facillityCount).toEqual(facilities.length); 
  });

  it('can raise a toggle filter action when receiving a click event from child', () => {
    const spy = jest.fn();
    const wrapper = mount(<FacilitiesFilterForm labels={facilities} statuses={statuses} onToggleFilter={spy} />);
    
    wrapper
      .find(FacilitiesFilter)
      .first()
      .find('input')
      .simulate('click');
    
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0].type).toEqual(types.toggleFilter);
  })

});
 