import React from 'react';
import { Button } from 'react-bootstrap';
import { toggleSorting } from './sorting.actions';

const Sorting = (props) => (<Button className='sorting' onClick={() => props.dispatch(toggleSorting)}>{ props.sorting ? 'Unsort' : 'Sort' }</Button>);

export default Sorting;