import { types, toggleFilter } from './facilities-filter.actions.js';
import reducer from './facilities-filter.reducer.js';

describe('Facilities filter reducer', () => {

  it('can turn a filter from on to off on a valid toggle event', () => {
    const state = [true];
    const action = toggleFilter(0);
    const actual = reducer(state, action);

    expect(actual).toEqual([false]);
  });
})