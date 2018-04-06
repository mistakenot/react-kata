import React from 'react';

export const styles = {
  searchResultsItem: 'search-results-item',
  searchResultsItemName: 'search-results-item-name',
  searchResultsItemRating: 'search-results-item-rating'
};

const SearchResultsItem = props => (
  <div className={styles.searchResultsItem} >
    <p className={styles.searchResultsItemName}>{ props.Name }</p>
    <p className={styles.searchResultsItemRating}>{ props.StarRating }</p>
  </div>
);

export default SearchResultsItem;