import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Job = (props) => {
    return(
        <div>
            <Card>
                <CardMedia style={{paddingTop:'55%'}}
                            title={props.job.title}
                            image={props.job.image}
                />
                <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.job.title}
                        </Typography>
                        <Typography component="p">
                            {props.job.description}
                        </Typography>
                        <CardActions>
                            <Button size="small" color="primary" href="/applications">
                                Apply Now
                            </Button>
                            <Button size="small" color="secondary" onClick = {props.deleteJob.bind(this, props.job.id)}>
                                Delete
                            </Button>
                        </CardActions>
                </CardContent>
            </Card>
        </div>
    )

}

export default Job