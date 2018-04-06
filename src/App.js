import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Row, Col } from 'react-bootstrap';

import SearchResults from './search-results/search-results';
import FilterForm from './facilities-filter/facilities-filter-form';

const items = require('./data.json'); 

class App extends Component {
  render() {
    return (
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
                <FilterForm labels={['a', 'b', 'c']} statuses={[true, true, true]} onToggleFilter={() => {}} />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <SearchResults resultItems={items} />
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
