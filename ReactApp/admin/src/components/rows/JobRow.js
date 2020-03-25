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

export default class JobRow extends Component{
    state = {
        editable: false,
        
        job: {
            id: this.props.jb.id,
            title: this.props.jb.title,
            description: this.props.jb.description,
            startDate: this.props.jb.startDate,
            experience: this.props.jb.experience,
            salary: this.props.jb.salary,
            type: this.props.jb.type,
            expiryDate: this.props.jb.expiryDate
          }
    }

    
handleEdit = () => {
    if(this.state.editable){
        this.props.updateJob(this.state.job);
    }
    this.setState({editable: !this.state.editable});
  }

handleChange = name => e => {
    this.setState({
      job: {...this.state.job, [name]: e.target.value}
    })
    console.log(this.state.job);
  }

    render() {
    return (
        <TableRow key={this.props.jb.id}  >
        <TableCell component="th" scope="row">
          {this.props.jb.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='title'
          name='title'
          label='Job Title'
          defaultValue={this.props.jb.title}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('title')}
          /> :
          this.props.jb.title}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='description'
          name='description'
          label='Job Description'
          defaultValue={this.props.jb.description}
          value={this.state.job.description}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('description')}
          /> :
          this.props.jb.description}</TableCell>

          <TableCell>{this.props.jb.job_company? this.props.jb.job_company.title : "No Company"}</TableCell>
          <TableCell>{ this.props.jb.job_department ? this.props.jb.job_department.title : "No Department"}</TableCell>

          <TableCell>{this.props.jb.applicants}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='startDate'
          name='startDate'
          label='Job Start Date'
          type='date'
          defaultValue={this.props.jb.startDate}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('startDate')}
          /> :
          this.props.jb.startDate}</TableCell>

          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='experience'
          name='experience'
          label='Job Experience'
          defaultValue={this.props.jb.experience}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('experience')}
          /> :
          this.props.jb.experience}</TableCell>

        <TableCell>{this.props.jb.image}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='salary'
          name='salary'
          label='Job Salary'
          defaultValue={this.props.jb.salary}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('salary')}
          /> :
          this.props.jb.salary}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <FormControl style={{width:'85%'}} >
          <InputLabel htmlFor="type" >Job Type</InputLabel>
          <Select
            id = 'type'
            name = 'type'
            defaultValue={this.props.jb.type}
            value={this.state.job.type}
            onChange={this.handleChange('type')}
          >
            <MenuItem value={'Part time'}>Part time</MenuItem>
            <MenuItem value={'Full time'}>Full time</MenuItem>
          </Select>
        </FormControl>
           :
          this.props.jb.type}</TableCell>
          
          <TableCell align="center">{
            this.state.editable? <TextField
            id='expiryDate'
            name='expiryDate'
            label='Job Expiry Date'
            type='date'
            defaultValue={this.props.jb.expiryDate}
            style={{marginBottom:'10px', width:'85%'}}
            onChange={this.handleChange('expiryDate')}
            /> :
            this.props.jb.expiryDate}</TableCell>

            <TableCell align="center">{this.props.jb.job_admin? this.props.jb.job_admin.fullName : "No Admin Created It"}</TableCell>


        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteJob(this.props.jb.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
