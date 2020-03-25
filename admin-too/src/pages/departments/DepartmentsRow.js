import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import DepartmentsImage from './DepartmentsImage'

export default class DepartmentsRow extends Component{
    state = {
        editable: false,
        
        department: {
            id: this.props.dept.id,
            title: this.props.dept.title,
            description: this.props.dept.description,
            image: this.props.dept.image,
            department_admin: this.props.dept.department_admin
          }
    }

    
handleEdit = () => {
    if(this.state.editable){
        this.props.updateDepartment(this.state.department);
    }
    this.setState({editable: !this.state.editable});
  }

handleChange = name => e => {
    this.setState({
      department: {...this.state.department, [name]: e.target.value}
    })
    console.log(this.state.department);
  }

    render() {
    return (
        <TableRow key={this.props.dept.id}  >
        <TableCell component="th" scope="row">
          {this.props.dept.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='title'
          name='title'
          label='Title'
          defaultValue={this.props.dept.title}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('title')}
          /> :
          this.props.dept.title}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='description'
          name='description'
          label='Description'
          defaultValue={this.props.dept.description}
          value={this.state.department.description}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('description')}
          /> :
          this.props.dept.description}</TableCell>

          
        <TableCell align="center">{
          <DepartmentsImage dept={this.props.dept} updateDepartment={this.props.updateDepartment}/> }</TableCell>

        <TableCell align="center">{
        this.props.dept.department_admin? this.props.dept.department_admin.fullName : "No Admin Created It"}</TableCell>  

        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteDepartment(this.props.dept.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
