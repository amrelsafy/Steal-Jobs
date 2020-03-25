import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';

export default class AdminsRow extends Component{
    state = {
        editable: false,
        
        admin: {
            id: this.props.admn.id,
            fullName: this.props.admn.fullName,
            email: this.props.admn.email,
            password: this.props.admn.password
          }
    }

    
handleEdit = () => {
    if(this.state.editable){
        this.props.updateAdmin(this.state.admin);
    }
    this.setState({editable: !this.state.editable});
  }

handleChange = name => e => {
    this.setState({
      admin: {...this.state.admin, [name]: e.target.value}
    })
    console.log(this.state.admin);
  }

    render() {
    return (
        <TableRow key={this.props.admn.id}  >
        <TableCell component="th" scope="row">
          {this.props.admn.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='fullName'
          name='fullName'
          label='Full Name'
          defaultValue={this.props.admn.fullName}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('fullName')}
          /> :
          this.props.admn.fullName}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='email'
          name='email'
          label='Email'
          defaultValue={this.props.admn.email}
          value={this.state.admin.email}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('email')}
          /> :
          this.props.admn.email}</TableCell>

          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='password'
          name='password'
          label='Password'
          defaultValue={this.props.admn.password}
          value={this.state.admin.password}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('password')}
          /> :
          this.props.admn.password}</TableCell>

        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteAdmin(this.props.admn.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
