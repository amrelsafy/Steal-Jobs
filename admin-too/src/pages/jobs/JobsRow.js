import React, {Component} from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import JobsUpdateFormDialog from './JobsUpdateFormDialog';
import JobsImage from './JobsImage'

export default class JobsRow extends Component{
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

    
// handleEdit = () => {
//     if(this.state.editable){
//         this.props.updateJob(this.state.job);
//     }
//     this.setState({editable: !this.state.editable});
//   }


handleChange = name => e => {
    this.setState({
      job: {...this.state.job, [name]: e.target.value}
    })
    console.log(this.state.job);
  }

  render() {
    return (
        <TableRow key={this.props.jb.id}  >
        <TableCell style={tableCellStyle} component="th" scope="row">
          {this.props.jb.id}
        </TableCell>

        <TableCell style={tableCellStyle} align="center">{
          this.props.jb.title}</TableCell>

        <TableCell style={tableCellStyle} align="center">{
          this.props.jb.description}</TableCell>

          <TableCell style={tableCellStyle}>{this.props.jb.job_company? this.props.jb.job_company.title : "No Company"}</TableCell>
          <TableCell style={tableCellStyle}>{ this.props.jb.job_department ? this.props.jb.job_department.title : "No Department"}</TableCell>

          <TableCell style={tableCellStyle}>{this.props.jb.applicants}</TableCell>
          
        <TableCell style={tableCellStyle} align="center">{
          this.props.jb.startDate}</TableCell>

          
        <TableCell style={tableCellStyle} align="center">{
          this.props.jb.experience}</TableCell>

        <TableCell style={tableCellStyle} ><JobsImage jb = {this.props.jb} updateJob = {this.props.updateJob}/></TableCell>

        <TableCell style={tableCellStyle} align="center">{
          this.props.jb.salary}</TableCell>
          
        <TableCell style={tableCellStyle} align="center">{
          this.props.jb.type}</TableCell>
          
          <TableCell style={tableCellStyle} align="center">{
            this.props.jb.expiryDate}</TableCell>

            <TableCell style={tableCellStyle} align="center">{this.props.jb.job_admin? this.props.jb.job_admin.fullName : "No Admin Created It"}</TableCell>


        <JobsUpdateFormDialog jb={this.props.jb} updateJob={this.props.updateJob}/>
       <IconButton  style={{position: 'center'}} onClick = {()=>{this.props.deleteJob(this.props.jb.id)}}>
                  <DeleteIcon style={{color: '#000'}}/>
       </IconButton>
       
      </TableRow>
    )
    }
}

const tableCellStyle = {
  padding: '14px 20px 14px 16px'
}