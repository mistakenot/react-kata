import React, { Component } from 'react';

import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

import SearchResults from './search-results/search-results.js';

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
            <h1>Welcome to React</h1>
            <p>
              <SearchResults resultItems={items} />
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
