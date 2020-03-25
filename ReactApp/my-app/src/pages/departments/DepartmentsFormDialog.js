import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import {Add} from '@material-ui/icons'

export class DepartmentsFormDialog extends Component {
    state = {
        open: false,

        department: {
          title: '',
          description: '',
          image: null
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
        department: {...this.state.department, [name]: e.target.value}
      })
      console.log(this.state.department)
    }

    handleSubmit =  () => {
      this.props.addDepartment(this.state.department)

      this.setState({
        department: {
          title: '',
          description: ''
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
            department: {...this.state.department, image: reader.result}
          })
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      }

    render() {
     
        return (
      <Fragment>
        <Fab  style={{background: '#1C164C', marginLeft: '30px', marginTop:'10px'}} onClick={this.handleClickOpen.bind(this)} size="medium">
          <AddIcon style={{color:'#fff'}} />
        </Fab>
      <Dialog open={this.state.open} onClose={this.handleClose.bind(this)}>
        <DialogTitle style={{float:'center'}}>Add New Department</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id='title'
              name='title'
              label='Department Title'
              value={this.state.department.title}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('title')}
            />
            <br />
             <TextField
              id='description'
              name='description'
              label='Department Description'
              value={this.state.department.description}
              style={{width:'400px'}}
              multiline
              onChange={this.handleChange('description')}
            />
            <br />
            <input
             id='image'
             name='image'
             style={{display: 'none'}}
             label='Department Image'
             type='file'
             onChange={this.getBase64} 
             ref={fileInput => this.fileInput = fileInput}           
            />
            <Button variant='outlined' onClick={() => this.fileInput.click()}>Upload Department Image</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Add Department
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

export default DepartmentsFormDialog

