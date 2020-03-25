import React, { Component, Fragment } from "react";
import axios from 'axios'
import JobsListing from './JobsListing'
import Header from '../../layout/Header'
import HomepageImage from '../../images/Homepage.png'

class Jobs extends Component{

    constructor(props){
        super(props);

        this.state = {
            jobs: []
       };
 
    }

    componentDidMount(){
        axios.get('http://localhost:3306/api/jobs')
        .then(res => this.setState({
            jobs: res.data.data
        }));
    }

    addApplication = (job) => {
        axios.post('http://localhost:3306/api/applications', {
            "status": "Pending",
            "user": `${localStorage.getItem('ID')}`,
            "job": `${job.id}`
        }, {headers: headers});
    }

    render() {
    
        return (
            <Fragment>
                <div style = {{
                width: '100%',
                height: '768px',
                backgroundImage: `url(${HomepageImage})`,
                backgroundSize: 'cover',
                }}>

            <Header />
                <JobsListing jobs = {this.state.jobs} addApplication={this.addApplication}/>
                </div>
            </Fragment>
        );
    }
}

const headers = {
    Authorization: "Bearer " + localStorage.getItem("token")
  };

export default Jobs;