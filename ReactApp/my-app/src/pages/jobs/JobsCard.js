import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import JobApplicationDialog from './JobApplicationDialog';



export class JobsCard extends Component{

    handleClickOpen = () =>{
        this.setState({openDialog: !this.state.openDialog})
      }
    
    handleClose = () => {
        this.setState({openDialog: false})
    }

    state = {
        openDialog: false
    }

    handleApply = () => {
        this.props.addApplication(this.props.job);
        this.setState({
            openDialog: true
        })
    }

    render(){
    return(
        <div>
            <Card>
                <CardMedia style={{paddingTop:'55%', backgroundSize:'contain'}}
                            title={this.props.job.title}
                            image={this.props.job.image}
                />
                <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.job.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.job.description}
                        </Typography>
                        <CardActions>
                            <Button size="small" color="primary" onClick={this.handleApply} >
                                Steal Job Now
                            </Button>
                        </CardActions>
                </CardContent>
            </Card>
            <JobApplicationDialog job={this.props.job} handleClose ={this.handleClose} open={this.state.openDialog}/>
        </div>
    )
    }
}

export default JobsCard