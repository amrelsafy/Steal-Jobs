import React, { Component, Fragment } from 'react'
import UsersListing from './UsersListing';
import Snackbar from '../../layout/Snackbar'
import axios from 'axios'

export class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            snackBarOpen: false,
            snackBarMessage: "",
            snackBarType: "success"
        }   
    }

    handleCloseSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };

    componentDidMount(){
        axios.get('http://localhost:3306/api/users', {
          headers: headers
        })
        .then(res => {
          this.setState({users: res.data.data});
        this.setState({   
          snackBarMessage: res.data.message,
          snackBarOpen: true,
          snackBarType: "success"
       });
      })
        .catch(err => {
          this.setState({
            snackBarOpen: true,
            snackBarMessage: err.message,
            snackBarType: "error"})
        }
        );
    }

    deleteUser = (id) => {
        axios.delete(`http://localhost:3306/api/users/${id}`, {
          headers: headers
        })
        .then(res => {
          this.setState({users: [...this.state.users.filter(
          user => user.id !== id)]});
          this.setState({
            snackBarOpen: true,
            snackBarMessage: res.data,
            snackBarType: "success"});
          })      
          .catch(err => {
            this.setState({   
              snackBarMessage: err.message,
              snackBarOpen: true,
              snackBarType: "error"
            });
          });    
        }

    updateUser = (user) => {
        axios.put(`http://localhost:3306/api/users/${user.id}`, {
            "fullName": `${user.fullName}`,
            "age": `${user.age}`,
            "mobile": `${user.mobile}`,
            "email": `${user.email}`,
            "image": `${user.image}`,
            "country": `${user.country}`,
            "company": `${user.company}`,
            "university": `${user.university}`,
            "yearOfGrade": `${user.yearOfGrade}`,
            "jobStatus": `${user.jobStatus}`,
            "experience": `${user.experience}`,
            "bdate": `${user.bdate}`
        }, {
          headers: headers
        })
        .then(res => {
          this.updateInState(res.data.data);
          this.setState({
            snackBarOpen: true,
            snackBarMessage: res.data.message,
            snackBarType: "success"});
        })
        .catch(err => {
          this.setState({   
             snackBarMessage: err.message,
             snackBarOpen: true,
             snackBarType: "error"
          });
      });
      }
      
      updateInState = (item) => {
        let newData = this.state.users;
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id === item.id) {
            newData[i] = item;
            break;
          }
        }
        this.setState({users: newData});
      }

    render() {
        return (
            <Fragment>
                <UsersListing
                users = {this.state.users}
                updateUser = {this.updateUser}
                deleteUser = {this.deleteUser}
                />

                <Snackbar 
                   type={this.state.snackBarType}
                   open={this.state.snackBarOpen}
                   autoHideDuration={4000}
                   message={this.state.snackBarMessage}
                   onClose={this.handleCloseSnackbar}
                />
            </Fragment>
        )
    }
}

const headers = {
  Authorization: "Bearer " + localStorage.getItem("token")
};

export default Users
