import React from 'react';

import FacilitiesFilter from './facilities-filter';
import { toggleFilter } from './facilities-filter.actions';
import { FormGroup } from 'react-bootstrap';

export const styles = {
  facility: 'facilities-filter-facility',
  facilityStatus: 'facilities-filter-status'
}

const FacilitiesFilterForm = props => (
  <form className={'inline'}>
    <FormGroup>
    { props.labels.map((l, i) =>
      <FacilitiesFilter key={i} label={l} state={props.statuses[i]} onClick={() => props.onToggleFilter(toggleFilter(i))} />) }
    </FormGroup>
  </form>
)

export default FacilitiesFilterForm;