import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
//import {Add} from '@material-ui/icons'

export class DepartmentsFormDialog extends Component {
    state = {
        open: false,

        department: {
          title: '',
          description: '',
          image: null,
          created_by: localStorage.getItem('ID')
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
            description: '',
            image: null,
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
        <Fab  style={{background: '#25212A',
                      marginLeft: '30px',
                      marginTop:'10px',
                      position: 'absolute',
                      left: '4%',
                      marginTop: '17px'}}
                      onClick={this.handleClickOpen.bind(this)} size="medium">

          <AddIcon style={{color:'#fff'}} />
        </Fab>
      <Dialog open={this.state.open} onClose={this.handleClose.bind(this)}>
        <DialogTitle style={{float:'center'}}>Add New Department</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id='title'
              name='title'
              label='Title'
              value={this.state.department.title}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('title')}
            />
            <br />
             <TextField
              id='description'
              name='description'
              label='Description'
              value={this.state.department.description}
              style={{width:'400px'}}
              multiline
              onChange={this.handleChange('description')}
            />
            <br />
            <TextField
              id='created_by'
              name='created_by'
              label='Created By'
              value={this.state.department.created_by}
              style={{width:'400px'}}
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
            <Button variant='outlined' onClick={() => this.fileInput.click()}>Upload Image</Button>
            <br />
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

