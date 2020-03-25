import React, {Fragment, Component} from 'react'
import {Dialog, Button} from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import {Add} from '@material-ui/icons'

export class JobApplicationDialog extends Component {

    render() {
        
        return (
      <Fragment>
        <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <DialogTitle id="job-application-title">{"Job Application Submission"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="job-application-description">
            Thank you for applying to {this.props.job.title}.
            <br />
            Check other jobs for more opportunities.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{background:'#f00', color:'#fff'}} autoFocus onClick={this.props.handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
            </Fragment>
        )
    }
}

export default JobApplicationDialog

