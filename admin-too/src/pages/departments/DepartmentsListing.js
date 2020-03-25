import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DepartmentsRow from './DepartmentsRow';
import DepartmentsFormDialog from './DepartmentsFormDialog';
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

export class DepartmentsListing extends Component {
    
    render() {
        return (
            <div>
            <Paper style={paperStyle} zDepth={5}> 
            <DepartmentsFormDialog
            addDepartment = {this.props.addDepartment}
                /> 
            <h1>Departments</h1>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Department ID</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Created By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.departments.map(department => (
                  <DepartmentsRow dept = {department} updateDepartment = {this.props.updateDepartment} deleteDepartment = {this.props.deleteDepartment} />
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

export default DepartmentsListing
