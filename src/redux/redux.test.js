import React from 'react';
import { shallow, mount } from 'enzyme';

import Redux, { mapStateToProps, mapDispatchToProps } from './redux';
import { types as searchActionTypes, loadSearchResultItems } from '../search-results/search-results.actions';
import { types as filterActionTypes, loadFacilities } from '../facilities-filter/facilities-filter.actions';


describe('Redux component', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = {
      dispatch: jest.fn(),
      subscribe: jest.fn(),
      getState: jest.fn()
    }
  });

  it('can render correctly', () => {
    shallow(<Redux items={[]} store={mockStore} />);
  });

  it('initilises redux on mount', () => {
    const items = [{Name: 'name', Facilities: ['one']}];
    shallow(<Redux items={items} store={mockStore} />);
    
    expect(mockStore.dispatch.mock.calls.length).toEqual(2);
    const firstArgs = mockStore.dispatch.mock.calls[0];
    const secondArgs = mockStore.dispatch.mock.calls[1];

    expect(firstArgs[0]).toEqual(loadFacilities(['one']));
    expect(secondArgs[0]).toEqual(loadSearchResultItems(items));
  });

  describe('state to props', () => {
    it('can map redux state to application state', () => {
      let state = {
        filters: {
          'f1': false,
          'f2': true
        },
        items: [
          { Name: 'one', Facilities: ['f1', 'f2'] },
          { Name: 'two', Facilities: ['f1'] } ]
      }

      let actual = mapStateToProps(state);
      let expected = {
        filters: state.filters,
        items: [
          { Name: 'one', Facilities: ['f1', 'f2'] }
        ]
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('dispatch to props', () => {
    it('can correctly assign dispatch', () => {
      const actual = mapDispatchToProps(1);
      expect(actual.dispatch).toEqual(1);
    });
  });
});