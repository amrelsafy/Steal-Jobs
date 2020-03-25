import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Applications from './pages/applications/Applications';
import Jobs from './pages/jobs/Jobs'
import Header from './layout/Header';
import Homepage from './layout/Homepage'
import Departments from './pages/departments/Departments'
import Register from './pages/applications/Register'
import Login from './pages/login/Login'

const routes = [
  {
    path: "/",
    component: () => <Homepage />,
    exact: true
  },
  {
    path: "/jobs",
    component: () => <Jobs />
  },
  {
    path: "/departments",
    component: () => <Departments />
  },
  {
    path: "/applications",
    component: () => <Applications />
  },
  {
    path: "/signup",
    component: () => <Register />
  },
  {
    path: "/login",
    component: () => <Login />
  }
]

export class App extends Component {
  incrementApplications = (id) => {
    this.setState({jobs: this.state.jobs.map(job => {
      if(job.id === id) {
        job.applied = job.applied + 1
      }
      return job
    })})
  }

  state = {
  applicants:[]
  }
  render() {
  return (
    <div>
    <Router>
      
        <Switch>
          {
            routes.map((route, index) => (
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
