import React, { Component, Fragment } from 'react'
import ApplicationsListing from './ApplicationsListing';
import Snackbar from '../../layout/Snackbar'
import axios from 'axios'

export class Applications extends Component {

    constructor(props){
        super(props);
        this.state = {
            applications: [],
            snackBarOpen: false,
            snackBarMessage: "",
            snackBarType: "success"
        }   
    }

    handleCloseSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };

    componentDidMount(){
        axios.get('http://localhost:3306/api/applications', {headers: headers})
        .then(res => {
          this.setState({applications: res.data.data});
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

    deleteApplication = (id) => {
        axios.delete(`http://localhost:3306/api/applications/${id}`, {headers: headers})
        .then(res => {
          this.setState({applications: [...this.state.applications.filter(
          application => application.id !== id)]});
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

    updateApplication = (application) => {
        axios.put(`http://localhost:3306/api/applications/${application.id}`, {
            "status": `${application.status}`
        }, {headers: headers})
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
        let newData = this.state.applications;
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id === item.id) {
            newData[i] = item;
            break;
          }
        }
        this.setState({applications: newData});
      }

    render() {
        return (
            <Fragment>
                <ApplicationsListing
                applications = {this.state.applications}
                updateApplication = {this.updateApplication}
                deleteApplication = {this.deleteApplication}
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

export default Applications
