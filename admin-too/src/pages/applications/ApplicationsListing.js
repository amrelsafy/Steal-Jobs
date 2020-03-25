import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ApplicationsRow from './ApplicationsRow'
import Paper from '@material-ui/core/Paper'

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

export class ApplicationsListing extends Component {
    
    render() {
        return (
            <div>
            <Paper style={paperStyle} zDepth={5}>
            <h1>Applications</h1>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Application ID</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">User</TableCell>
                  <TableCell align="center">Job</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.applications.map(application => (
                  <ApplicationsRow app = {application} updateApplication = {this.props.updateApplication} deleteApplication = {this.props.deleteApplication} />
                ))}
              </TableBody>
            </Table>
            </Paper>
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

export default ApplicationsListing
