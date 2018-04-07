import React from 'react';
import { shallow } from 'enzyme';

import Sorting from './sorting';
import { toggleSorting } from './sorting.actions';

describe('Sorting component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      dispatch: jest.fn()
    };
    wrapper = shallow(<Sorting {...props} />);
  });

  it('dispatches sort event on clicking sort', () => {
    wrapper
      .find('.sorting')
      .simulate('click');
    
    expect(props.dispatch.mock.calls[0]).toEqual([toggleSorting]);
  });
});