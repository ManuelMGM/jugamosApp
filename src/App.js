import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';

import Login from './components/login/Login';
import AddUser from './components/login/AddUser';
import User from './components/user/User';
import Ground from './components/ground/Ground';
import GroundFields from './components/ground/GroundFields';
import GroundSchedule from './components/ground/GroundSchedule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Responsive>
          <BrowserRouter>
            <div>
              <Route path="/create" exact component={AddUser} />
              <Route path="/login" exact component={Login} />
              <Route path="/user/:uid" exact component={User} />
              <Route path="/ground/:uid" exact component={Ground} />
              <Route path="/groundFields" exact component={GroundFields} />
              <Route path="/groundSchedule" exact component={GroundSchedule} />
            </div>
          </BrowserRouter>
        </Responsive>
      </div>
    );
  }
}

export default App;
