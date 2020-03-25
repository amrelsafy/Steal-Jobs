import React, { Component } from 'react';
import Header from './layout/Header';
import Homepage from './layout/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admins from './pages/admins/Admins'
import Applications from './pages/applications/Applications'
import Companies from './pages/companies/Companies'
import Departments from './pages/departments/Departments'
import Jobs from './pages/jobs/Jobs'
import Users from './pages/users/Users'
import Paper from '@material-ui/core/Paper'
import Login from './pages/login/Login'


const routes = [
  {
    path: "/",
    component: () => <Homepage />,
    exact: true
  },

  {
    path: "/login",
    component: () => <Login setCurrentAdmin={setCurrentAdmin}/>
  },

  {
    path: "/admins",
    component: () => <Admins />
  },

  {
    path: "/applications",
    component: () => <Applications />
  },

  {
    path: "/companies",
    component: () => <Companies />
  },

  {
    path: "/departments",
    component: () => <Departments />
  },

  {
    path: "/jobs",
    component: () => <Jobs />
  },

  {
    path: "/users",
    component: () => <Users />
  }
];

let setCurrentAdmin = (id) => {
  this.setState({currentAdmin: id});
}

class App extends Component {

state = {
  currentAdmin : ''
}

render(){  
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
          key = {index}
          exact = {route.exact}
          path = {route.path}
          render = {props => <route.component {...props} />}
          />
        ))}
      </Switch>
      </Router>
    </div>
  );
}
}



export default App;
