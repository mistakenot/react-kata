export const types = {
  toggleFilter: 'FACILITIES_FILTER_TOGGLE_FILTER',
  loadData: 'FACILITIES_FILTER_LOAD_DATA'
}

export const toggleFilter = (index) => ({
  type: types.toggleFilter,
  index: index
});

export const loadFacilities = (facilities) => ({
  type: types.loadData,
  items: facilities
});