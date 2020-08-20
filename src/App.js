import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Router>
          <Route exact path = '/' component = { Home }></Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
