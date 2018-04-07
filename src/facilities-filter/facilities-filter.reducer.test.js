import { types, toggleFilter, loadFacilities } from './facilities-filter.actions.js';
import reducer from './facilities-filter.reducer.js';

describe('Facilities filter reducer', () => {

  it('can turn a filter from on to off on a valid toggle event', () => {
    const state = {'name': true};
    const action = toggleFilter('name');
    const actual = reducer(state, action);

    expect(actual).toEqual({'name': false});
  });

  it('can turn a filter from off to on on a valid toggle event', () => {
    const state = {'name': false};
    const action = toggleFilter('name');
    const actual = reducer(state, action);

    expect(actual).toEqual({'name': true});
  });

  // Would it be better to fail here / report to user than ignore?
  it('can ignore an out of range toggle event', () => {
    const state = {'name': true};
    const action = toggleFilter('name1');
    const actual = reducer(state, action);

    expect(actual).toEqual({'name': true});
  });

  it('can ignore an invalid out of range toggle event', () => {
    const state = {'name': true};
    const action = toggleFilter('not exists');
    const actual = reducer(state, action);

    expect(actual).toEqual({'name': true});
  });

  it('can load initial data', () => {
    const items = ['name']
    const action = loadFacilities(items);
    const actual = reducer(undefined, action);

    expect(actual).toEqual({'name': true});
  });
})