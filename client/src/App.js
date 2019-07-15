import React, { Component } from 'react';
import './App.css';
import MemberList from './components/member-list'
import MemberDetails from './components/member-details'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation'



class App extends Component {




  render() {
    return (
      <div>
        <Navigation />

        <Switch>

          <Route path='/memberList' extact component={MemberList} />}
          <Route path='/memberDetail/:id' exact component={MemberDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;


