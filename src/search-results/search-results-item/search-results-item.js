import React from 'react';
import _ from 'lodash';

import { Row, Col, Glyphicon, Badge, ListGroupItem } from 'react-bootstrap';

export const styles = {
  searchResultsItem: 'search-results-item',
  searchResultsItemName: 'search-results-item-name',
  searchResultsItemStar: 'search-results-item-star',
  searchResultsItemFacility: 'search-results-item-facility'
};

const SearchResultsItem = props => (
  <ListGroupItem>
    <h2>
      <span className={styles.searchResultsItemName}>{ props.Name }</span>
      { props.Facilities.map((f, i) =>
      <Badge pullRight={true} key={i} style={{marginLeft: '10px'}}>
        <span className={styles.searchResultsItemFacility}>{ f }</span>
      </Badge>
      )}
      </h2>
    <p>
      <div>
      { _.range(props.StarRating).map((_, i) => <Glyphicon key={i} className={styles.searchResultsItemStar} glyph="star" />) }
      </div>
    </p>
  </ListGroupItem>
);

export default SearchResultsItem;