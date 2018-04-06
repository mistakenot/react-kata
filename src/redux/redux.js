import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import _ from 'lodash';

import store from './redux.store';
import Layout from '../layout/layout';

export const mapStateToProps = state => {
  const allFacilities = _(state.items).flatMap(i => i.Facilities).uniq();
  const filterStates = allFacilities.map((_, i) => state.filters[i]);
  const filteredItems = _.filter(state.items, (item) => _.intersection(state.filters, item.Facilities).length > 0);
  
  return {
    filters: {
      states: filterStates,
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

const Redux = () => (
  <Provider store={store}>
    <ConnectedLayout />
  </Provider>);

export default Redux;