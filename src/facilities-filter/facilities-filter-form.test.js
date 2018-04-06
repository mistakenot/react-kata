import React from 'react';
import { shallow } from 'enzyme';

import FacilitiesFilterForm, { styles } from './facilities-filter-form';

describe('Facilities filter form', () => {
  const facilities = ['one', 'two', 'three'];
  const statuses = [true, false, true];

  it('can display a list of all facility options', () => {
    const wrapper = shallow(<FacilitiesFilterForm labels={facilities} statuses={statuses} />);
    const facillityCount = wrapper
      .find('.' + styles.facility)
      .length;

    expect(facillityCount).toEqual(facilities.length); 
  });

  it('can display a name of all facility options', () => {
    const wrapper = shallow(<FacilitiesFilterForm labels={facilities} statuses={statuses} />);
    const facilityText = wrapper
      .find('.' + styles.facility)
      .map(e => e.text());

    expect(facilityText).toEqual(facilities); 
  });

  it('can display a active status of all facility filters', () => {
    const wrapper = shallow(<FacilitiesFilterForm labels={facilities} statuses={statuses} />);
    const checkedStatus = wrapper
      .find('.' + styles.facilityStatus)
      .map(e => e.props().checked);

    expect(checkedStatus).toEqual(statuses); 
  });
});
 