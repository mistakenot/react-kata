import React from 'react';
import { Grid, Navbar, Jumbotron, Row, Col, Button } from 'react-bootstrap';

import SearchResults from '../search-results/search-results';
import FilterForm from '../facilities-filter/facilities-filter-form/facilities-filter-form';

const Layout = props => (
  <div>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Grid>
    </Navbar>
    <Jumbotron>
      <Grid>
        <h1>Search Results</h1>
        <Row>
          <Col md={6}>
            <Button className='sorting' onClick={() => props.dispatch('CLICK_SORT')}>Sort</Button>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FilterForm filters={props.filters} onToggleFilter={props.dispatch} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <SearchResults resultItems={props.items} />
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
</div>);

export default Layout;
