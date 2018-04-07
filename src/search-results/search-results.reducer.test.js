import reducer from './search-results.reducer';
import { loadSearchResultItems } from './search-results.actions';

describe('Search results reducer', () => {
  it('can load result items', () => {
    const items = [1];
    const action = loadSearchResultItems(items);
    const actual = reducer(undefined, action);

    expect(actual).toEqual(items);
  });
});