import React from 'react';

export const styles = {
  searchResultsItem: 'search-results-item'
};

const SearchResults = props => (
  <div> 
  { props.resultItems.map((item, i) =>
    <div key={i} className={styles.searchResultsItem} ></div>) }
  </div>
);

export default SearchResults;