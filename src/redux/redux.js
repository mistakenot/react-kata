import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import _ from 'lodash';

import Layout from '../layout/layout';
import { loadFacilities } from '../facilities-filter/facilities-filter.actions';
import { loadSearchResultItems } from '../search-results/search-results.actions';

export const mapStateToProps = state => {
  const enabledFilters = _(state.filters)
    .pickBy((enabled, label) => enabled)
    .map((enabled, label) => label)
    .value();

  const filteredItems =_(state.items)
    .filter((item) => 
      enabledFilters.length === 0 || 
      _.intersection(enabledFilters, item.Facilities).length >= enabledFilters.length)
    .value();

  const sortedItems = _(filteredItems)
    .sortBy(i => i.StarRating)
    .reverse()
    .value();

  return {
    filters: state.filters,
    items: state.sorting ? sortedItems : filteredItems,
    sorting: state.sorting
  };
}

export const mapDispatchToProps = dispatch => ({ dispatch });

const ConnectedLayout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);

class Redux extends Component {
  
  componentDidMount() {
    const allFilters = _(this.props.items)
      .flatMap(item => item.Facilities)
      .value();
    const allFiltersAction = loadFacilities(allFilters);
    this.props.store.dispatch(allFiltersAction);
    
    const loadItemsAction = loadSearchResultItems(this.props.items);
    this.props.store.dispatch(loadItemsAction);
  }

  render() {
    return (
      <Provider store={this.props.store} >
        <ConnectedLayout />
      </Provider>);
  }
}

export default Redux;