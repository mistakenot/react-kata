import React from 'react';

import { Checkbox } from 'react-bootstrap';

export const styles = {
  facility: 'facilities-label',
  facilityStatus: 'facilities-status'
}

const FacilitiesFilter = props => (
  <Checkbox inline className={styles.facilityStatus} checked={props.status} onClick={props.onClick}>
    <div className={styles.facility}>{props.label}</div>
  </Checkbox>
)

export default FacilitiesFilter;