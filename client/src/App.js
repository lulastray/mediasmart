import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberList from './components/member-list'
import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()

  }


  render() {
    return (
      <div>
        <MemberList />
      </div>
    );
  }
}

export default App;
// class App extends Component {


//   constructor(props) {
//     super(props)
//     this.state = { loggedInUser: null }
//     this.services = new AuthServices()
//   }

//   setUser = userObj => this.setState({ loggedInUser: userObj })

//   fetchUser = () => {
//     if (this.state.loggedInUser === null) {
//       this.services.loggedin()
//         .then(response => this.setState({ loggedInUser: response }))
//         .catch(x => this.setState({ loggedInUser: false }))
//     }
//   }

//   render() {

//     this.fetchUser()

//     if (this.state.loggedInUser) {
//       return (
//         <div>
//           <Navigation userInSession={this.state.loggedInUser} setTheUser={this.setUser} />
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <ProtectedRoute path='/profile' user={this.state.loggedInUser} component={Profile} />
//             <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
//             <Route path="/coasters/:id" component={CoasterDetails} />
//           </Switch>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <Navigation userInSession={this.state.loggedInUser} />
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <ProtectedRoute user={this.state.loggedInUser} path='/profile' component={Profile} />
//             <Route path="/coasters" exact render={() => <CoastersList userInSession={this.state.loggedInUser} />} />
//             <Route path="/coasters/:id" component={CoasterDetails} />
//             <Route path="/signup" render={() => <Signup setTheUser={this.setUser} />} />
//             <Route path="/login" render={() => <Login setTheUser={this.setUser} />} />
//           </Switch>
//         </div>
//       )
//     }
//   }
// }

// export default App;