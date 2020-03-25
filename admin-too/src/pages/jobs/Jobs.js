import React, { Component, Fragment } from 'react'
import JobsListing from './JobsListing';
import Snackbar from '../../layout/Snackbar'
import axios from 'axios';

export class Jobs extends Component {

    constructor(props){
        super(props);
        this.state = {
            jobs: [],
            snackBarOpen: false,
            snackBarMessage: "",
            snackBarType: "success"
        }   
    }

    handleCloseSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };

    componentDidMount(){
        axios.get('http://localhost:3306/api/jobs', {headers: headers})
        .then(res => {
          this.setState({jobs: res.data.data});
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

    addJob = (job) => {
        axios.post('http://localhost:3306/api/jobs',{
          "title": `${job.title}`,
          "description": `${job.description}`,
          "company": `${job.company}`,
          "department": `${job.department}`,
          "applicants": "0" ,
          "startDate": `${job.startDate}`,
          "experience": `${job.experience}`,
          "image": `${job.image}`,
          "salary": `${job.salary}`,  
          "type": `${job.type}`,
          "expiryDate": `${job.expiryDate}`,
          "created_by": `${job.created_by}`
        }, {headers: headers})
        .then(res => {
          this.setState({jobs: [...this.state.jobs, res.data.data]});
          console.log(res);
            this.setState({
              snackBarOpen: true,
              snackBarMessage: res.data.message,
              snackBarType: "success"})
          })
        .catch(err => {
         this.setState({   
            snackBarMessage: err.message,
            snackBarOpen: true,
            snackBarType: "error"
         })
        });
      }

    deleteJob = (id) => {
        axios.delete(`http://localhost:3306/api/jobs/${id}`, {headers: headers})
        .then(res => {
          this.setState({jobs: [...this.state.jobs.filter(
          job => job.id !== id)]});
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

    updateJob = (job) => {
        axios.put(`http://localhost:3306/api/jobs/${job.id}`, {
          "title": `${job.title}`,
          "description": `${job.description}`,
          "company": `${job.company}`,
          "department": `${job.department}`,
          "applicants": `${job.applicants}` ,
          "startDate": `${job.startDate}`,
          "experience": `${job.experience}`,
          "salary": `${job.salary}`,
          "type": `${job.type}`,
          "expiryDate": `${job.expiryDate}`,
          "image": `${job.image}`
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
        let newData = this.state.jobs;
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id === item.id) {
            newData[i] = item;
            break;
          }
        }
        this.setState({jobs: newData});
      }

    render() {
        return (
            <Fragment>
                <JobsListing
                jobs = {this.state.jobs}
                updateJob = {this.updateJob}
                deleteJob = {this.deleteJob}
                addJob = {this.addJob}
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

export default Jobs
