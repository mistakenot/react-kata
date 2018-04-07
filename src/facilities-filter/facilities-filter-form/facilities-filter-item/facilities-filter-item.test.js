import React from 'react';
import { shallow } from 'enzyme';

import FacilitiesFilterItem, { styles } from './facilities-filter-item';

describe('Facilities filter form', () => {
  const label = 'one';
  const status = true;

  it('renders without crashing', () => {
    shallow(<FacilitiesFilterItem label={label} status={status} />);
  });

  it('can display a name of facility', () => {
    const wrapper = shallow(<FacilitiesFilterItem label={label} status={status} />);
    const facilityText = wrapper
      .find('.' + styles.facility)
      .first()
      .text();

    expect(facilityText).toEqual(label);
  });

  it('can display an active facility filter', () => {
    const wrapper = shallow(<FacilitiesFilterItem label={label} status={true} />);
    const checkedStatus = wrapper
      .find('.' + styles.facilityStatus)
      .first()
      .props()
      .defaultChecked;

    expect(checkedStatus).toEqual(true);
  });

  it('can display an inactive facility filter', () => {
    const wrapper = shallow(<FacilitiesFilterItem label={label} status={false} />);
    const checkedStatus = wrapper
      .find('.' + styles.facilityStatus)
      .first()
      .props()
      .checked;

    expect(checkedStatus).toEqual(undefined);
  })

  it('can raise an onclick event when clicked', () => {
    const spy = jest.fn();
    const wrapper = shallow(<FacilitiesFilterItem label={label} status={status} onClick={spy} />);
    wrapper
      .find('.' + styles.facilityStatus)
      .first()
      .simulate('change');

    expect(spy.mock.calls.length).toEqual(1);
  })
});
 