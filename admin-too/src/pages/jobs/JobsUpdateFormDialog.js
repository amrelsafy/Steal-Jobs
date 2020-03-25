import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
//import {Add} from '@material-ui/icons'

export class JobsUpdateFormDialog extends Component {
    state = {
        open: false,

        job: {
          id: this.props.jb.id,  
          title: this.props.jb.title,
          description: this.props.jb.description,
          company: this.props.jb.company,
          department: this.props.jb.department,
          applicants: this.props.jb.applicants,
          startDate: this.props.jb.startDate,
          experience: this.props.jb.experience,
          image: this.props.jb.image,
          salary: this.props.jb.salary,  
          type: this.props.jb.type,
          expiryDate: this.props.jb.expiryDate,
          created_by: this.props.jb.created_by
        },

        companies:[],
        departments: []
    }

    componentDidMount(){
      axios.get('http://localhost:3306/api/companies', {headers: headers})
      .then(res => this.setState({companies: res.data.data}));

      axios.get('http://localhost:3306/api/departments', {headers: headers})
      .then(res => this.setState({departments: res.data.data}));
    }
    
    handleClose = () => {
        this.setState({open: false})
    }
    
    handleClickOpen = () =>{
        console.log('Clicked');
      this.setState({open: !this.state.open})
    }
    
    handleChange = name => e => {
      this.setState({
        job: {...this.state.job, [name]: e.target.value}
      })
      console.log(this.state.job)
    }

    handleSubmit =  () => {
        
      this.props.updateJob(this.state.job)

      this.handleClose()
    }

    getBase64 = e => {
      var file = e.target.files[0]
      console.log(file)
      let reader = new FileReader()
      reader.readAsDataURL(file)
      console.log(reader.result)
      reader.onload = () => {
        this.setState({
          job: {...this.state.job, image: reader.result}
        })
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }

    render() {
     
        return (
      <Fragment>
        <IconButton  style={{position: 'center'}} onClick = {this.handleClickOpen}>
                  <EditIcon style={{color: '#000'}}/>
       </IconButton>
      <Dialog open={this.state.open} onClose={this.handleClose.bind(this)}>
        <DialogTitle style={{float:'center'}}>Edit Job</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id='title'
              name='title'
              label='Title'
              value={this.state.job.title}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('title')}
            />
            <br />
             <TextField
              id='description'
              name='description'
              label='Description'
              value={this.state.job.description}
              style={{width:'400px'}}
              multiline
              onChange={this.handleChange('description')}
            />
            <br />
            
            <FormControl style={{width:'400px'}} >
              <InputLabel htmlFor="type" >Company</InputLabel>
              <Select
                id = 'company'
                name = 'company'
                value={this.state.job.company}
                onChange={this.handleChange('company')}
              >
               {this.state.companies.map(company => (
                 <MenuItem value={company.id}>{company.title}</MenuItem>
               ))}
              </Select>
            </FormControl>
            <br />
            <FormControl style={{width:'400px'}} >
              <InputLabel htmlFor="type" >Department</InputLabel>
              <Select
                id = 'department'
                name = 'department'
                value={this.state.job.department}
                onChange={this.handleChange('department')}
              >
               {this.state.departments.map(department => (
                 <MenuItem value={department.id}>{department.title}</MenuItem>
               ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              id='startDate'
              name='startDate'
              label='Start Date'
              type='date'
              defaultValue=''
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.job.startDate}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('startDate')}
            />
            <br />
            <FormControl style={{width:'400px'}} >
              <InputLabel htmlFor="type" >Job Type</InputLabel>
              <Select
                id = 'type'
                name = 'type'
                value={this.state.job.type}
                onChange={this.handleChange('type')}
              >
                <MenuItem value={'Part time'}>Part time</MenuItem>
                <MenuItem value={'Full time'}>Full time</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              id='salary'
              name='salary'
              label='Salary'
              value={this.state.job.salary}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('salary')}
            />
            <br />  
            <TextField
              id='experience'
              name='experience'
              label='Min Experience'
              value={this.state.job.experience}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('experience')}
            />
            <br />
            <TextField
              id='expiryDate'
              name='expiryDate'
              label='Expiry Date'
              type='date'
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.job.expiryDate}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('expiryDate')}
            />
            <br />
            <input
             id='image'
             name='image'
             style={{display: 'none'}}
             label='Image'
             type='file'
             onChange={this.getBase64} 
             ref={fileInput => this.fileInput = fileInput}           
            />
            <Button variant='outlined' onClick={() => this.fileInput.click()}>Upload Job Image</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Edit Job
          </Button>
          <Button onClick={this.handleClose.bind(this)} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
            </Fragment>
        )
    }
}

const headers = {
    Authorization: "Bearer " + localStorage.getItem("token")
  };

export default JobsUpdateFormDialog

