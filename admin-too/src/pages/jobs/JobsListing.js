import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import JobsRow from './JobsRow';
import JobsFormDialog from './JobsFormDialog'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
    root: {
      width: '60%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
      maxWidth: '750 px '
    },
  }));

export class JobsListing extends Component {
    
    render() {
        return (
          <div>
            <div>
            <Paper style={paperStyle} zDepth={5}>
            <JobsFormDialog
              addJob = {this.props.addJob}
                />  
            <h1>Jobs</h1>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
            <TableCell>Job ID</TableCell>
            <TableCell align="center" style={tableCellStyle}>Title</TableCell>
            <TableCell align="center" style={tableCellStyle}>Description</TableCell>
            <TableCell align="center" style={tableCellStyle}>Company</TableCell>
            <TableCell align="center" style={tableCellStyle}>Department</TableCell>
            <TableCell align="center" style={tableCellStyle}>Applicants</TableCell>
            <TableCell align="center" style={tableCellStyle}>Start Date</TableCell>
            <TableCell align="center" style={tableCellStyle}>Experience</TableCell>
            <TableCell align="center" style={tableCellStyle}>Image</TableCell>
          <TableCell align="center" style={tableCellStyle}>Salary</TableCell>
          <TableCell align="center" style={tableCellStyle}>Type</TableCell>
          <TableCell align="center" style={tableCellStyle}>Expiry Date</TableCell>
          <TableCell align="center" style={tableCellStyle}>Created By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.jobs.map(job => (
                  <JobsRow jb = {job} updateJob = {this.props.updateJob} deleteJob = {this.props.deleteJob} />
                ))}
              </TableBody>
            </Table>
            </Paper>
          </div>

          </div>
        )
    }
}

const paperStyle = {
  minHeight: '85%',
  minWidth: '90%',
  maxHeight: '98%',
  maxWidth: '98%',
  margin: '4%',
  textAlign: 'center',
  display: 'inline-block'
};

const tableCellStyle = {
  padding: '14px 20px 14px 16px'
}

export default JobsListing
