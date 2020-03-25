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

export default class UsersProfessionalRow extends Component{
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
          id='company'
          name='company'
          label='Company'
          defaultValue={this.props.usr.company}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('company')}
          /> :
          this.props.usr.company}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='university'
          name='university'
          label='University'
          defaultValue={this.props.usr.university}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('university')}
          /> :
          this.props.usr.university}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='yearOfGrade'
          name='yearOfGrade'
          label='Year of Grad'
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
          label='Experience'
          defaultValue={this.props.usr.experience}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('experience')}
          /> :
          this.props.usr.experience}</TableCell>

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
