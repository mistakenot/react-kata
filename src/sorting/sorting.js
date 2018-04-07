import React from 'react';
import { Button } from 'react-bootstrap';
import { toggleSorting } from './sorting.actions';

const Sorting = (props) => (<Button className='sorting' onClick={() => props.dispatch(toggleSorting)}>Sort</Button>);

export default Sorting;