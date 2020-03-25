import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import DepartmentsFormDialog from '../formDialogs/DepartmentsFormDialog';
import DepartmentRow from '../rows/DepartmentRow'

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

class DepartmentTable extends Component {

state = {
    departments: [],
    editable: false
}

handleChange = name => e => {
  console.log(name)
} 

componentDidMount(){
    axios.get('http://localhost:3306/api/departments')
        .then(res => this.setState({departments: res.data}));
}

addDepartment = (department) => {
  axios.post('http://localhost:3306/api/departments',{
    "title": `${department.title}`,
    "description": `${department.description}`,
    "image": `${department.image}`,
    "created_by": `${department.created_by}`
  })
  .then(res => this.setState({departments: [...this.state.departments, res.data]}));
}

deleteDepartment = (id) => {
  axios.delete(`http://localhost:3306/api/departments/${id}`)
        .then(res => this.setState({departments: [...this.state.departments.filter(
          department => department.id !== id)]}));
}

updateDepartment = (department) => {
  axios.put(`http://localhost:3306/api/departments/${department.id}`, {
    "title": `${department.title}`,
    "description": `${department.description}`,
    "image": `${department.image}`,
    "created_by": `${department.created_by}`
  })
  .then(res => this.updateInState(res.data))
}

updateInState = (item) => {
  let newData = this.state.departments;
  for (let i = 0; i < newData.length; i++) {
    if (newData[i].id === item.id) {
      newData[i] = item;
      break;
    }
  }
  this.setState({ departments: newData});
}

render(){
  return (
      <div>
      <Table className={useStyles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Department ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Created by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {this.state.departments.map(department => (
            <DepartmentRow dep = {department} deleteDepartment={this.deleteDepartment} updateDepartment={this.updateDepartment} />
          ))}
        </TableBody>
      </Table>
      <DepartmentsFormDialog addDepartment = {this.addDepartment} />
      </div>
  );
        }
}

export default DepartmentTable;