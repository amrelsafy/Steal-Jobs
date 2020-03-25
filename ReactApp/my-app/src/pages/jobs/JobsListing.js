import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import JobsCard from './JobsCard'
import Paper from '@material-ui/core/Paper'




export class JobsListing extends Component {
    state = {
        searchString: "",
    }

    constructor(props){
        super(props)
    }
    
    onSearchChange = (e) => {
        if(e.target.value){
            this.setState({searchString: e.target.value})
        }
        else{
            this.setState({searchString: ''})
        }
    }

    render() {
        let filteredJobs = this.props.jobs.filter((job) => {
            return job.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
        })
        return (
            <Paper style={{width: '90%', left: '0', right: '0', margin: 'auto'}}>
            <div>
                <TextField style = {{padding: '24px', float:'right'}}
                            placeholder = "Search Jobs"
                            onChange = {this.onSearchChange}
                />
            
                <Grid container spacing={24} style={{padding:'24px'}} >
                    {filteredJobs.map(currentJob => (
                        <Grid job xs={12} sm={6} lg={4} xl={3}>
                            <JobsCard job ={currentJob} addApplication={this.props.addApplication} /> 
                        </Grid>
                    ))}
                </Grid>
                
            </div>
            </Paper>
        )
    }
}

export default JobsListing
