import React from 'react';

export const styles = {
  facility: 'facilities-filter-facility',
  facilityStatus: 'facilities-filter-status'
}

const FacilitiesFilter = props => (
  <div>
  { props.labels.map((l, i) =>
    <div key={i}>
      <p className={styles.facility}>{l}</p>
      <input className={styles.facilityStatus} type='checkbox' checked={props.statuses[i]} />}
    </div>) }
  </div>
)

export default FacilitiesFilter;