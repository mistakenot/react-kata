import React from 'react';
import { Button } from 'react-bootstrap';

const Sorting = (props) => (<Button className='sorting' onClick={() => props.dispatch('CLICK_SORT')}>Sort</Button>);

export default Sorting;