import React from 'react';

export const styles = {
  searchResultsItem: 'search-results-item',
  searchResultsItemName: 'search-results-item-name',
  searchResultsItemRating: 'search-results-item-rating'
};

const SearchResults = props => (
  <div> 
  { props.resultItems.map((item, i) =>
    <div key={i} className={styles.searchResultsItem} >
      <p className={styles.searchResultsItemName}>{ item.Name }</p>
      <p className={styles.searchResultsItemRating}>{ item.StarRating }</p>
    </div>) }
  </div>
);

export default SearchResults;