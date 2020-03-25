import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';
import UsersImage from './UsersImage';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class UsersPersonalRow extends Component{
    state = {
        editable: false,
        
        user: {
            id: this.props.usr.id,
            fullName: this.props.usr.fullName,
            age: this.props.usr.age,
            mobile: this.props.usr.mobile,
            email: this.props.usr.email,
            country: this.props.usr.country,
            company: this.props.usr.company,
            university: this.props.usr.university,
            yearOfGrade: this.props.usr.yearOfGrade,
            jobStatus: this.props.usr.jobStatus,
            experience: this.props.usr.experience,
            bdate: this.props.usr.bdate
          }
    }

    
handleEdit = () => {
    if(this.state.editable){
        this.props.updateUser(this.state.user);
    }
    this.setState({editable: !this.state.editable});
  }

handleChange = name => e => {
    this.setState({
      user: {...this.state.user, [name]: e.target.value}
    })
    console.log(this.state.user);
  }

    render() {
    return (
        <TableRow key={this.props.usr.id}>
        <TableCell component="th" scope="row">
          {this.props.usr.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='fullName'
          name='fullName'
          label='Full Name'
          defaultValue={this.props.usr.fullName}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('fullName')}
          /> :
          this.props.usr.fullName}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='age'
          name='age'
          label='Age'
          defaultValue={this.props.usr.age}
          value={this.state.user.age}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('age')}
          /> :
          this.props.usr.age}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='mobile'
          name='mobile'
          label='Mobile'
          defaultValue={this.props.usr.mobile}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('mobile')}
          /> :
          this.props.usr.mobile}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='email'
          name='email'
          label='Email'
          defaultValue={this.props.usr.email}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('email')}
          /> :
          this.props.usr.email}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='country'
          name='country'
          label='Country'
          defaultValue={this.props.usr.country}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('country')}
          /> :
          this.props.usr.country}</TableCell>
        
          <TableCell align="center">{
            this.state.editable? <TextField
            id='bdate'
            name='bdate'
            label='Birth Date'
            type='date'
            defaultValue={this.props.usr.bdate}
            style={{marginBottom:'10px', width:'85%'}}
            onChange={this.handleChange('bdate')}
            /> :
            this.props.usr.bdate}</TableCell>

        <TableCell><UsersImage usr={this.props.usr} updateUser={this.props.updateUser} /></TableCell>

        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteUser(this.props.usr.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
