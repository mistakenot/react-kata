import React from 'react';
import { shallow } from 'enzyme';

import FacilitiesFilter, { styles } from './facilities-filter';

describe('Facilities filter form', () => {
  const label = 'one';
  const status = true;

  it('renders without crashing', () => {
    shallow(<FacilitiesFilter label={label} status={status} />);
  });

  it('can display a name of facility', () => {
    const wrapper = shallow(<FacilitiesFilter label={label} status={status} />);
    const facilityText = wrapper
      .find('.' + styles.facility)
      .first()
      .text();

    expect(facilityText).toEqual(label);
  });

  it('can display an active facility filter', () => {
    const wrapper = shallow(<FacilitiesFilter labels={label} status={status} />);
    const checkedStatus = wrapper
      .find('.' + styles.facilityStatus)
      .first()
      .props()
      .checked;

    expect(checkedStatus).toEqual(status);
  });
});
 