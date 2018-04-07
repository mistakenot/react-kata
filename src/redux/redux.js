import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import _ from 'lodash';

import Layout from '../layout/layout';
import { loadFacilities } from '../facilities-filter/facilities-filter.actions';
import { loadSearchResultItems } from '../search-results/search-results.actions';

export const mapStateToProps = state => {
  const allFacilities = _(state.items).flatMap(i => i.Facilities).uniq().value();
  const enabledFilters = allFacilities.filter((_, i) => state.enabledFilters[i]);
  const filteredItems = _.filter(state.items, (item) => _.intersection(enabledFilters, item.Facilities).length > 0);
  
  return {
    filters: {
      states: state.enabledFilters,
      labels: allFacilities
    },
    items: filteredItems
  };
}

export const mapDispatchToProps = dispatch => ({ dispatch });

const ConnectedLayout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);

class Redux extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const filterValues = this.props.items.map(_ => true);
    const loadFiltersActions = loadFacilities(filterValues);
    this.props.store.dispatch(loadFiltersActions);

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