import { types } from './search-results.actions';

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.loadSearchResultItems:
      return action.items;
    default:
      return state;
  }
}

export default reducer;