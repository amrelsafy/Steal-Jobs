import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
//import {Add} from '@material-ui/icons'

export class UsersImage extends Component {
    state = {
        open: false,

        user: {
            id: this.props.usr.id,
            fullName: this.props.usr.fullName,
            age: this.props.usr.age,
            mobile: this.props.usr.mobile,
            email: this.props.usr.email,
            country: this.props.usr.country,
            company: this.props.usr.company,
            university: this.props.usr.university,
            yearOfGrade: this.props.usr.yearOfGrade,
            jobStatus: this.props.usr.jobStatus,
            experience: this.props.usr.experience,
            bdate: this.props.usr.bdate
          }
    }
    
    handleClose = () => {
        this.setState({open: false})
    }
    
    handleClickOpen = () =>{
      this.setState({open: !this.state.open})
    }

    handleSubmit =  () => {
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
            user: {...this.state.user, image: reader.result}
          });
          this.props.updateUser(this.state.user);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      }
    render() {
     
        return (
      <Fragment>
        <Button
        variant="outlined"
        onClick={this.handleClickOpen.bind(this)} size="medium">
            View Image
        </Button>
      <Dialog open={this.state.open} onClose={this.handleClose.bind(this)}>
        <DialogTitle style={{float:'center'}}>Job Image</DialogTitle>
        <DialogContent>
            <img style={{maxWidth: '100%'}} src={this.props.usr.image}/> 
        </DialogContent>
        <DialogActions>
        <input
             id='image'
             name='image'
             style={{display: 'none'}}
             label='Image'
             type='file'
             onChange={this.getBase64} 
             ref={fileInput => this.fileInput = fileInput}           
            />
            <Button onClick={() => this.fileInput.click()} color="primary">
              Upload Image
            </Button>
          <Button onClick={this.handleClose.bind(this)} color="secondary">
            Close
          </Button>
            <br />
        </DialogActions>
      </Dialog>
        </Fragment>
        )
    }
}

export default UsersImage

