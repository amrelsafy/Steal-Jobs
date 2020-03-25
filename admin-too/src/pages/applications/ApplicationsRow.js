import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ApplicationsRow extends Component{
    state = {
        editable: false,
        
        application: {
            id: this.props.app.id,
            status: this.props.app.status,
            user: this.props.app.user,
            job: this.props.app.job,
            application_user : this.props.app.application_user,
            application_job : this.props.app.application_job
          }
    }

    
handleEdit = () => {
    if(this.state.editable){
        this.props.updateApplication(this.state.application);
    }
    this.setState({editable: !this.state.editable});
  }

handleChange = name => e => {
    this.setState({
      application: {...this.state.application, [name]: e.target.value}
    })
    console.log(this.state.application);
  }

    render() {
    return (
        <TableRow key={this.props.app.id}  >
        <TableCell component="th" scope="row">
          {this.props.app.id}
        </TableCell>

        <TableCell align="center">{
          this.state.editable? <FormControl style={{width:'85%'}} >
          <InputLabel htmlFor="status" >Status</InputLabel>
          <Select
            id = 'status'
            name = 'status'
            defaultValue={this.props.app.status}
            value={this.state.application.status}
            onChange={this.handleChange('status')}
          >
            <MenuItem value={'Accepted'}>Accepted</MenuItem>
            <MenuItem value={'Rejected'}>Rejected</MenuItem>
            <MenuItem value={'Pending'}>Pending</MenuItem>
          </Select>
        </FormControl>
           :
          this.props.app.status}</TableCell>

        <TableCell align="center">{
          this.props.app.application_user ? this.props.app.application_user.fullName : "Applicant is not registered"}</TableCell>

          
        <TableCell align="center">{
          this.props.app.application_job ? this.props.app.application_job.title : "Application has no job"}</TableCell>

        <IconButton  style={{position: 'center'}} onClick = {()=>{this.handleEdit()}}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteApplication(this.props.app.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}
