import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import {Add} from '@material-ui/icons'

export class RegisterSubmissionDialog extends Component {

    render() {
        
        return (
      <Fragment>
        <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <DialogTitle id="register-submission-title">{"Register User Submission"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="register-submission-description">
            Thank you for registering your user.
            <br />
            Head back home to sign in with it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{background:'#1C164C', color:'#fff'}} autoFocus href="/">
            Back to homepage
          </Button>
        </DialogActions>
      </Dialog>
            </Fragment>
        )
    }
}

export default RegisterSubmissionDialog

