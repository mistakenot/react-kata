import { types } from './facilities-filter.actions';

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.toggleFilter: {
      return state.map((value, index) => action.index === index ? !value : value);
    }
    case types.loadData: {
      return action.items;
    }
    default:
      return state;
  }
};

export default reducer;