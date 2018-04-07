import React from 'react';
import { shallow, mount } from 'enzyme';

import Redux, { mapStateToProps, mapDispatchToProps } from './redux';
import { types as searchActionTypes } from '../search-results/search-results.actions';
import { types as filterActionTypes } from '../facilities-filter/facilities-filter.actions';

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
    shallow(<Redux items={[]} store={mockStore} />);
    
    expect(mockStore.dispatch.mock.calls.length).toEqual(2);
    const firstArgs = mockStore.dispatch.mock.calls[0];
    const secondArgs = mockStore.dispatch.mock.calls[1];

    expect(firstArgs[0]).toEqual({"items": [], "type": filterActionTypes.loadData});
    expect(secondArgs[0]).toEqual({"items": [], "type": searchActionTypes.loadSearchResultItems});
  });

  describe('state to props', () => {
    it('can map redux state to application state', () => {
      let state = {
        enabledFilters: [
          false, true
        ],
        items: [
          { Name: 'one', Facilities: ['f1', 'f2'] },
          { Name: 'two', Facilities: ['f1'] } ]
      }

      let actual = mapStateToProps(state);
      let expected = {
        filters: {
          states: [false, true],
          labels: ['f1', 'f2']
        },
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