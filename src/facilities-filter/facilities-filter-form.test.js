import React from 'react';
import { shallow } from 'enzyme';

import FacilitiesFilterForm, { styles } from './facilities-filter-form';
import FacilitiesFilter from './facilities-filter';

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

});
 