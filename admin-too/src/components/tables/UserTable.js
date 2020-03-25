import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import UserRow from '../rows/UserRow';
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


class UserTable extends Component {
  
    state = {
        users: []
    }

componentDidMount(){
    axios.get('http://localhost:3306/api/users')
        .then(res => this.setState({users: res.data}));

}


deleteUser = (id) => {
  axios.delete(`http://localhost:3306/api/users/${id}`)
        .then(res => this.setState({users: [...this.state.users.filter(
          user => user.id !== id)]}));
}

updateUser = (user) => {
  axios.put(`http://localhost:3306/api/users/${user.id}`, {
    "fullName": `${user.fullName}`,
    "age": `${user.age}`,
    "mobile": `${user.mobile}`,
    "email": `${user.email}`,
    "country": `${user.country}`,
    "company": `${user.company}`,
    "university": `${user.univeristy}`,
    "yearOfGrade": `${user.yearOfGrade}`,
    "jobStatus": `${user.jobStatus}`,
    "experience": `${user.experience}`,
    "bdate": `${user.bdate}`
  })
  .then(res => this.updateInState(res.data))
}

updateInState = (item) => {
  let newData = this.state.users;
  for (let i = 0; i < newData.length; i++) {
    if (newData[i].id === item.id) {
      newData[i] = item;
      break;
    }
  }
  this.setState({ users: newData});
}

render(){
  return (
      <Table className={useStyles.table}>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="center">Full Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">University</TableCell>
            <TableCell align="center">Year of Grade</TableCell>
            <TableCell align="center">Job Status</TableCell>
            <TableCell align="center">Experience</TableCell>
            <TableCell align="center">Birth Date</TableCell>
            <TableCell align="center">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.users.map(user => (
            <UserRow usr = {user} deleteUser = {this.deleteUser} updateUser = {this.updateUser}/>
          ))}
        </TableBody>
      </Table>
  );
        }
}

export default UserTable;