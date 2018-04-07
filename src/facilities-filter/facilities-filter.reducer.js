import { types } from './facilities-filter.actions';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.toggleFilter: {
      let key = action.key;
      if (state[key] !== undefined) {
        return {...state, [key]: !state[key] }
      }
      return state;
    }
    case types.loadData: {
      return action
        .items
        .reduce((state, item) => ({...state, [item]: true}), {});
    }
    default:
      return state;
  }
};

export default reducer;