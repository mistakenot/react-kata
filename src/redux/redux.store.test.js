import store from './redux.store';

import { loadSearchResultItems } from '../search-results/search-results.actions';
import { loadFacilities } from '../facilities-filter/facilities-filter.actions';
import { toggleSorting } from '../sorting/sorting.actions';

describe('Store', () => {
  // These aren't the best written tests because they import stuff from other domains for actions,
  //  but I'm not sure the best way to test it at the mo. Will come back to it.
  
  it('can update search item results', () => {
    const items = [0];
    const action = loadSearchResultItems(items);
    
    store.dispatch(action);

    const actual = store.getState();
    expect(actual.items).toEqual(items);
  });

  it('can update filter statuses', () => {
    const items = ['f1'];
    const action = loadFacilities(items);

    store.dispatch(action);

    const actual = store.getState();
    const expected = {
      ['f1']: false
    };
    expect(actual.filters).toEqual(expected);
  });

  it('can update sort state', () => {
    store.dispatch(toggleSorting);

    const actual = store.getState();
    expect(actual.sorting).toEqual(true);
  })
})