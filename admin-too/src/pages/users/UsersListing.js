import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UsersPersonalRow from './UsersPersonalRow';
import UsersProfessionalRow from './UsersProfessionalRow';
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

export class UsersListing extends Component {
    
    render() {
        return (
          <div>
            <div>
            <Paper style={paperStyle} zDepth={5}>  
            <h1>Users Personal</h1>
            <h1>{localStorage.getItem("jwtTokens")}</h1>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="center">Full Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Birth Date</TableCell>
            <TableCell align="center">Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.users.map(user => (
                  <UsersPersonalRow usr = {user} updateUser = {this.props.updateUser} deleteUser = {this.props.deleteUser} />
                ))}
              </TableBody>
            </Table>
            </Paper>
          </div>
          
          <div>
          <Paper style={paperStyle} zDepth={5}>  
          <h1>Users Professional</h1>
          <h1>{localStorage.getItem("jwtTokens")}</h1>
          <Table className={useStyles.table}>
            <TableHead>
              <TableRow>
          <TableCell>User ID</TableCell>
          <TableCell align="center">Full Name</TableCell>
          <TableCell align="center">Company</TableCell>
          <TableCell align="center">University</TableCell>
          <TableCell align="center">Year of Grade</TableCell>
          <TableCell align="center">Job Status</TableCell>
          <TableCell align="center">Experience</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users.map(user => (
                <UsersProfessionalRow usr = {user} updateUser = {this.props.updateUser} deleteUser = {this.props.deleteUser} />
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

export default UsersListing
