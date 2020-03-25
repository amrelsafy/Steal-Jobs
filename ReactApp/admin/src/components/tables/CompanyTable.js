import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import CompaniesFormDialog from '../formDialogs/CompaniesFormDialog';
import CompanyRow from '../rows/CompanyRow';

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

class CompanyTable extends Component {
  
state = {
    companies: []
}

addCompany = (company) => {
axios.post('http://localhost:3306/api/companies', {
  "title": `${company.title}`,
  "location": `${company.location}`,
  "type": `${company.type}`
})
.then(res => this.setState({companies: [...this.state.companies, res.data]}));
}

deleteCompany = (id) => {
  axios.delete(`http://localhost:3306/api/companies/${id}`)
        .then(res => this.setState({companies: [...this.state.companies.filter(
          company => company.id !== id)]}));
}

updateCompany = (company) => {
  axios.put(`http://localhost:3306/api/companies/${company.id}`, {
    "title": `${company.title}`,
    "location": `${company.location}`,
    "type": `${company.type}`
  })
  .then(res => this.updateInState(res.data))
}

updateInState = (item) => {
  let newData = this.state.companies;
  for (let i = 0; i < newData.length; i++) {
    if (newData[i].id === item.id) {
      newData[i] = item;
      break;
    }
  }
  this.setState({ companies: newData});
}

componentDidMount(){
    axios.get('http://localhost:3306/api/companies')
        .then(res => this.setState({companies: res.data}));
}

render(){
  return (
      <div>
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
          {this.state.companies.map(company => (
            <CompanyRow comp = {company} deleteCompany = {this.deleteCompany} updateCompany = {this.updateCompany}/>
          ))}
        </TableBody>
      </Table>
      <CompaniesFormDialog addCompany = {this.addCompany}/>
      </div>      
      );
        }
}

export default CompanyTable;