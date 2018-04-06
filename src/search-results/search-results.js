import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import SearchResultsItem from './search-results-item/search-results-item.js';

const SearchResults = props => (
  <ListGroup> 
  { props.resultItems.map((item, i) =>
    <SearchResultsItem key={i} {...item} />) }
  </ListGroup>
);

export default SearchResults;