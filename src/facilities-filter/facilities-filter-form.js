import React from 'react';

import FacilitiesFilter from './facilities-filter';

export const styles = {
  facility: 'facilities-filter-facility',
  facilityStatus: 'facilities-filter-status'
}

const FacilitiesFilterForm = props => (
  <div>
  { props.labels.map((l, i) =>
    <FacilitiesFilter key={i} label={l} state={props.statuses[i]} />) }
  </div>
)

export default FacilitiesFilterForm;