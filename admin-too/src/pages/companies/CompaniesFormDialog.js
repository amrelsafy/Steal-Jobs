import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
//import {Add} from '@material-ui/icons'

export class CompaniesFormDialog extends Component {
    state = {
        open: false,

        company: {
          title: '',
          location: '',
          type: ''
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
        company: {...this.state.company, [name]: e.target.value}
      })
      console.log(this.state.company)
    }

    handleSubmit =  () => {
      this.props.addCompany(this.state.company)

      this.setState({
        company: {
            title: '',
            location: '',
            type: ''
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
          company: {...this.state.company, image: reader.result}
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
        <DialogTitle style={{float:'center'}}>Add New Company</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id='title'
              name='title'
              label='Title'
              value={this.state.company.title}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('title')}
            />
            <br />
             <TextField
              id='location'
              name='location'
              label='Location'
              value={this.state.company.location}
              style={{width:'400px'}}
              multiline
              onChange={this.handleChange('location')}
            />
            <br />
            <TextField
              id='type'
              name='type'
              label='Type'
              value={this.state.company.type}
              style={{marginBottom:'10px', width:'400px'}}
              onChange={this.handleChange('type')}
            />
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Add Company
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

export default CompaniesFormDialog

