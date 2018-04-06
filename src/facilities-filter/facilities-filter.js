import React from 'react';

export const styles = {
  facility: 'facilities-label',
  facilityStatus: 'facilities-status'
}

const FacilitiesFilter = props => (
  <div>
    <p className={styles.facility}>{props.label}</p>
    <input className={styles.facilityStatus} type='checkbox' checked={props.status} />}
  </div>
)

export default FacilitiesFilter;