import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class UserRow extends Component{
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
            university: this.props.usr.univeristy,
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
          label='User Full Name'
          defaultValue={this.props.usr.fullName}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('fullName')}
          /> :
          this.props.usr.fullName}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='age'
          name='age'
          label='User Age'
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
          label='User Mobile'
          defaultValue={this.props.usr.mobile}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('mobile')}
          /> :
          this.props.usr.mobile}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='email'
          name='email'
          label='User Email'
          defaultValue={this.props.usr.email}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('email')}
          /> :
          this.props.usr.email}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='country'
          name='country'
          label='User Country'
          defaultValue={this.props.usr.country}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('country')}
          /> :
          this.props.usr.country}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='company'
          name='company'
          label='User Company'
          defaultValue={this.props.usr.company}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('company')}
          /> :
          this.props.usr.company}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='university'
          name='university'
          label='User University'
          defaultValue={this.props.usr.university}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('university')}
          /> :
          this.props.usr.university}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='yearOfGrade'
          name='yearOfGrade'
          label='User Year of Grad'
          defaultValue={this.props.usr.yearOfGrade}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('yearOfGrade')}
          /> :
          this.props.usr.yearOfGrade}</TableCell>

        <TableCell align="center">{
          this.state.editable? <FormControl style={{width:'85%'}} >
          <InputLabel htmlFor="jobStatus" >Job Status</InputLabel>
          <Select
            id = 'jobStatus'
            name = 'jobStatus'
            defaultValue={this.props.usr.jobStatus}
            value={this.state.user.jobStatus}
            onChange={this.handleChange('jobStatus')}
          >
            <MenuItem value={'Unemployeed'}>Unemployeed</MenuItem>
            <MenuItem value={'Employeed'}>Employeed</MenuItem>
            <MenuItem value={'Retired'}>Retired</MenuItem>
          </Select>
        </FormControl>
           :
          this.props.usr.jobStatus}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='experience'
          name='experience'
          label='User Experience'
          defaultValue={this.props.usr.experience}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('experience')}
          /> :
          this.props.usr.experience}</TableCell>

          <TableCell align="center">{
            this.state.editable? <TextField
            id='bdate'
            name='bdate'
            label='User Birth Date'
            type='date'
            defaultValue={this.props.usr.bdate}
            style={{marginBottom:'10px', width:'85%'}}
            onChange={this.handleChange('bdate')}
            /> :
            this.props.usr.bdate}</TableCell>

        <TableCell>{this.props.usr.image}</TableCell>

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
