import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';

export default class CompanyRow extends Component{
    state = {
        editable: false,
        
        company: {
            id: this.props.comp.id,
            title: this.props.comp.title,
            location: this.props.comp.location,
            type: this.props.comp.type
          }
    }

    
handleEdit = () => {
    if(this.state.editable){
        this.props.updateCompany(this.state.company);
    }
    this.setState({editable: !this.state.editable});
  }

handleChange = name => e => {
    this.setState({
      company: {...this.state.company, [name]: e.target.value}
    })
    console.log(this.state.company);
  }

    render() {
    return (
        <TableRow key={this.props.comp.id}>
        <TableCell component="th" scope="row">
          {this.props.comp.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='title'
          name='title'
          label='Company Title'
          defaultValue={this.props.comp.title}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('title')}
          /> :
          this.props.comp.title}</TableCell>

        <TableCell align="center">{
          this.state.editable? <TextField
          id='location'
          name='location'
          label='Company Location'
          defaultValue={this.props.comp.location}
          value={this.state.company.location}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('location')}
          /> :
          this.props.comp.location}</TableCell>
          
        <TableCell align="center">{
          this.state.editable? <TextField
          id='type'
          name='type'
          label='Company Type'
          defaultValue={this.props.comp.type}
          style={{marginBottom:'10px', width:'85%'}}
          onChange={this.handleChange('type')}
          /> :
          this.props.comp.type}</TableCell>

        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteCompany(this.props.comp.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
