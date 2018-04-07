import { types } from './sorting.actions';

const defaultState = false;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.toggleSorting: {
      return !state;
    }
    default:
      return state;
  }
}

export default reducer;