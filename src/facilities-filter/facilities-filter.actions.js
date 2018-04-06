export const types = {
  toggleFilter: 'TOGGLE_FILTER'
}

export const toggleFilter = (index) => ({
  type: types.toggleFilter,
  index: index
});