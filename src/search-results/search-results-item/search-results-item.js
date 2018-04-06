import React from 'react';

export const styles = {
  searchResultsItem: 'search-results-item',
  searchResultsItemName: 'search-results-item-name',
  searchResultsItemRating: 'search-results-item-rating',
  searchResultsItemFacility: 'search-results-item-facility'
};

const SearchResultsItem = props => (
  <div className={styles.searchResultsItem} >
    <p className={styles.searchResultsItemName}>{ props.Name }</p>
    <p className={styles.searchResultsItemRating}>{ props.StarRating }</p>
    <ul>
    { props.Facilities.map((f, i) =>
      <il key={i} className={styles.searchResultsItemFacility} >
        { f }
      </il>
      )}
    </ul>
  </div>
);

export default SearchResultsItem;