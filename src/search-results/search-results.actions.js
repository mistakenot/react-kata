export const types = {
  loadSearchResultItems: 'SEARCH_RESULTS_LOAD_SEARCH_RESULT_ITEMS'
}

export const loadSearchResultItems = (items) => ({
  type: types.loadSearchResultItems,
  items
});