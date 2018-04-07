import React from 'react';

import { Checkbox } from 'react-bootstrap';

export const styles = {
  facility: 'facilities-label',
  facilityStatus: 'facilities-status'
}

const FacilitiesFilterItem = props => (
  <Checkbox inline className={styles.facilityStatus} defaultChecked={props.status} onChange={props.onClick}>
    <div className={styles.facility} value={props.label} >{props.label}</div>
  </Checkbox>
)

export default FacilitiesFilterItem;