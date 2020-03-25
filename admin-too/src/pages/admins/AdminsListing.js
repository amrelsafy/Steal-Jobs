import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AdminsRow from './AdminsRow';
import AdminsFormDialog from './AdminsFormDialog';
import Paper from '@material-ui/core/Paper';

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

export class AdminsListing extends Component {
    
    render() {
        return (
            <div>
            <Paper style={paperStyle} zDepth={5}>
            <AdminsFormDialog addAdmin = {this.props.addAdmin}
            />
            <h1>Admins</h1>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Admin ID</TableCell>
                  <TableCell align="center">Full Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.admins.map(admin => (
                  <AdminsRow admn = {admin} updateAdmin = {this.props.updateAdmin} deleteAdmin = {this.props.deleteAdmin} />
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

export default AdminsListing
