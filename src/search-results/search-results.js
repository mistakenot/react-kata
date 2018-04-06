import React from 'react';

import SearchResultsItem from './search-results-item/search-results-item.js';

const SearchResults = props => (
  <div> 
  { props.resultItems.map((item, i) =>
    <div key={i} >
      <SearchResultsItem {...item} />
    </div>) }
  </div>
);

export default SearchResults;