import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import JobsFormDialog from '../formDialogs/JobsFormDialog'
import JobRow from '../rows/JobRow'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));


class JobTable extends Component{
state = {
    jobs: []
}

componentDidMount(){
    axios.get('http://localhost:3306/api/jobs')
        .then(res => this.setState({jobs: res.data}));
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
  })
  .then(res => this.setState({jobs: [...this.state.jobs, res.data]}));
}

deleteJob = (id) => {
  axios.delete(`http://localhost:3306/api/jobs/${id}`)
        .then(res => this.setState({jobs: [...this.state.jobs.filter(
          job => job.id !== id)]}));
}

updateJob = (job) => {
  axios.put(`http://localhost:3306/api/jobs/${job.id}`, {
    "title": `${job.title}`,
    "description": `${job.description}`,
    "startDate": `${job.startDate}`,
    "experience": `${job.experience}`,
    "salary": `${job.salary}`,
    "type": `${job.type}`,
    "expiryDate": `${job.expiryDate}`
  })
  .then(res => this.updateInState(res.data))
}

updateInState = (item) => {
  let newData = this.state.jobs;
  for (let i = 0; i < newData.length; i++) {
    if (newData[i].id === item.id) {
      newData[i] = item;
      break;
    }
  }
  this.setState({ jobs: newData});
}

render(){
  return (
    <div>
      <Table className={useStyles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Job ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Applicants</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Experience</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Expiry Date</TableCell>
            <TableCell align="center">Created By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.jobs.map(job => (
            <JobRow jb = {job} updateJob = {this.updateJob} deleteJob = {this.deleteJob} />
          ))}
        </TableBody>
      </Table>
    
    <JobsFormDialog addJob = {this.addJob}/>
    </div>
  );
}
}

export default JobTable;