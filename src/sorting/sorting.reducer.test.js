import reducer from './sorting.reducer';
import { toggleSorting } from './sorting.actions';

describe('Sorting reducer', () => {
  it('can update state on sort event', () => {
    const state = false;
    const actual = reducer(state, toggleSorting);

    expect(actual).toEqual(true);
  });
})