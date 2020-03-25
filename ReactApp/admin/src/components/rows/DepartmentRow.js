import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';

export default class DepartmentRow extends Component{
    state = {
        editable: false,
        
        department: {
            id: this.props.dep.id,
            title: this.props.dep.title,
            description: this.props.dep.description,
            image: this.props.dep.image,
            created_by: this.props.dep.created_by
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
        <TableRow key={this.props.dep.id}>
        <TableCell component="th" scope="row">
          {this.props.dep.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='title'
          name='title'
          label='Department Title'
          defaultValue={this.props.dep.title}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('title')}
          /> :
          this.props.dep.title}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='description'
          name='description'
          label='Department Description'
          defaultValue={this.props.dep.description}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('description')}
          /> :
          this.props.dep.description}</TableCell>
          
        <TableCell align="center">{this.props.dep.image}</TableCell>
        <TableCell align="center">{this.props.dep.department_admin.fullName? this.props.dep.department_admin.fullName : "No Admin Created it"}</TableCell>

        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteDepartment(this.props.dep.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
