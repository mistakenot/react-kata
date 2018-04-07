import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';
import Sorting from './sorting';
import { toggleSorting } from './sorting.actions';

describe('Sorting component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      dispatch: jest.fn(),
      sorting: true
    };
    wrapper = shallow(<Sorting {...props} />)
  });

  it('dispatches sort event on clicking sort', () => {
    wrapper
      .find('.sorting')
      .simulate('click');
    
    expect(props.dispatch.mock.calls[0]).toEqual([toggleSorting]);
  });

  it('can display `Unsort` text when sorted', () => {
    const actual = wrapper
      .render()
      .text();

    expect(actual).toEqual('Unsort');
  });

  it('can display `Sort` test when unsorted', () => {
    const actual = shallow(<Sorting {...props} sorting={false} />)
      .render()
      .text();

    expect(actual).toEqual('Sort');
  });
});