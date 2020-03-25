import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CompaniesRow from './CompaniesRow';
import CompaniesFormDialog from './CompaniesFormDialog';
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

export class CompaniesListing extends Component {
    
    render() {
        return (
            <div> 
            <Paper style={paperStyle} zDepth={5}>
            <CompaniesFormDialog
            addCompany = {this.props.addCompany}
                />  
            <h1>Companies</h1>
            <Table className={useStyles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Company ID</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.companies.map(company => (
                  <CompaniesRow comp = {company} updateCompany = {this.props.updateCompany} deleteCompany = {this.props.deleteCompany} />
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

export default CompaniesListing;
