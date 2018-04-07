import React from 'react';
import _ from 'lodash';

import FacilitiesFilterItem from './facilities-filter-item/facilities-filter-item';
import { toggleFilter } from '../facilities-filter.actions';
import { FormGroup } from 'react-bootstrap';

export const styles = {
  facility: 'facilities-filter-facility',
  facilityStatus: 'facilities-filter-status'
}

const FacilitiesFilterForm = props => (
  <form className={'inline'}>
    <FormGroup>
    { _(props.filters).map((enabled, label) => 
      <FacilitiesFilterItem 
        key={label} 
        label={label} 
        status={enabled} 
        onClick={() => props.dispatch(toggleFilter(label))} />).value() }
    </FormGroup>
  </form>
)

export default FacilitiesFilterForm;