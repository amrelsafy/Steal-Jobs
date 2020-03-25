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
//import {Add} from '@material-ui/icons'

export class JobsFormDialog extends Component {
    state = {
        open: false,

        job: {
          title: '',
          description: '',
          company: '',
          department: '',
          applicants: 0,
          startDate: '',
          experience: '',
          image: null,
          salary: '',  
          type: '',
          expiryDate: '',
          created_by:''
        }
    }
    
    handleClose = () => {
        this.setState({open: false})
    }
    
    handleClickOpen = () =>{
      this.setState({open: !this.state.open})
    }
    
    handleChange = name => e => {
      this.setState({
        job: {...this.state.job, [name]: e.target.value}
      })
      console.log(this.state.job)
    }

    handleSubmit =  () => {
      this.props.addJob(this.state.job)

      this.setState({
        job: {
            title: '',
            description: '',
            company: '',
            department: '',
            applicants: 0,
            startDate: '',
            experience: '',
            image: null,
            salary: '',  
            type: '',
            expiryDate: '',
            created_by:''
        }
      })

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
        <Fab  style={{background: '#25212A', marginLeft: '30px', marginTop:'10px'}} onClick={this.handleClickOpen.bind(this)} size="medium">
          <AddIcon style={{color:'#fff'}} />
        </Fab>
      <Dialog open={this.state.open} onClose={this.handleClose.bind(this)}>
        <DialogTitle style={{float:'center'}}>Add New Job</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id='title'
              name='title'
              label='Job Title'
              value={this.state.job.title}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('title')}
            />
            <br />
             <TextField
              id='description'
              name='description'
              label='Job Description'
              value={this.state.job.description}
              style={{width:'400px'}}
              multiline
              onChange={this.handleChange('description')}
            />
            <br />
            <TextField
              id='company'
              name='company'
              label='Job Company'
              value={this.state.job.company}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('company')}
            />
            <br />
            <TextField
              id='department'
              name='department'
              label='Job Department'
              value={this.state.job.department}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('department')}
            />
            <br />
            <TextField
              id='startDate'
              name='startDate'
              label='Job Start Date'
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
              label='Job Salary'
              value={this.state.job.salary}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('salary')}
            />
            <br />  
            <TextField
              id='experience'
              name='experience'
              label='Job Min Experience'
              value={this.state.job.experience}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('experience')}
            />
            <br />
            <TextField
              id='expiryDate'
              name='expiryDate'
              label='Job Expiry Date'
              type='date'
              defaultValue=''
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.job.expiryDate}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('expiryDate')}
            />
            <br />
            <TextField
              id='created_by'
              name='created_by'
              label='Created By'
              value={this.state.job.created_by}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('created_by')}
            />
            <br />
            <input
             id='image'
             name='image'
             style={{display: 'none'}}
             label='Job Image'
             type='file'
             onChange={this.getBase64} 
             ref={fileInput => this.fileInput = fileInput}           
            />
            <Button variant='outlined' onClick={() => this.fileInput.click()}>Upload Job Image</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Add Job
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

export default JobsFormDialog

