import React from 'react';
import _ from 'lodash';

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
    { _(props.filters).map((enabled, label) => 
      <FacilitiesFilter 
        key={label} 
        label={label} 
        status={enabled} 
        onClick={() => props.onToggleFilter(toggleFilter(label))} />).value() }
    </FormGroup>
  </form>
)

export default FacilitiesFilterForm;