import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
//import {Add} from '@material-ui/icons'

export class AdminsFormDialog extends Component {
    state = {
        open: false,

        admin: {
          fullName: '',
          email: '',
          password: ''
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
        admin: {...this.state.admin, [name]: e.target.value}
      })
      console.log(this.state.admin)
    }

    handleSubmit =  () => {
      this.props.addAdmin(this.state.admin)

      this.setState({
        admin: {
            fullName: '',
            email: '',
            password: ''
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
          admin: {...this.state.admin, image: reader.result}
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
        <DialogTitle style={{float:'center'}}>Add New Admin</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id='fullName'
              name='fullName'
              label='Full Name'
              value={this.state.admin.fullName}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('fullName')}
            />
            <br />
             <TextField
              id='email'
              name='email'
              label='Email'
              value={this.state.admin.email}
              style={{width:'400px'}}
              multiline
              onChange={this.handleChange('email')}
            />
            <br />
            <TextField
              id='password'
              name='password'
              label='Password'
              value={this.state.admin.password}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('password')}
            />
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Add Admin
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

export default AdminsFormDialog

