import { types, toggleFilter, loadFacilities } from './facilities-filter.actions.js';
import reducer from './facilities-filter.reducer.js';

describe('Facilities filter reducer', () => {

  it('can turn a filter from on to off on a valid toggle event', () => {
    const state = [true];
    const action = toggleFilter(0);
    const actual = reducer(state, action);

    expect(actual).toEqual([false]);
  });

  it('can turn a filter from off to on on a valid toggle event', () => {
    const state = [false];
    const action = toggleFilter(0);
    const actual = reducer(state, action);

    expect(actual).toEqual([true]);
  });

  // Would it be better to fail here / report to user than ignore?
  it('can ignore an out of range toggle event', () => {
    const state = [];
    const action = toggleFilter(0);
    const actual = reducer(state, action);

    expect(actual).toEqual([]);
  });

  it('can ignore an invalid out of range toggle event', () => {
    const state = [];
    const action = toggleFilter(-1);
    const actual = reducer(state, action);

    expect(actual).toEqual([]);
  });

  it('can load initial data', () => {
    const items = [true]
    const action = loadFacilities(items);
    const actual = reducer(undefined, action);

    expect(actual).toEqual(items);
  });
})