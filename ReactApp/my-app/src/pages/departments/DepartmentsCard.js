import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const DepartmentsCard = (props) => {
    return(
        <div>
            <Card style={{padding:'10px'}}>
                <CardMedia style={{paddingTop:'55%', backgroundSize:'contain'}}
                            title={props.department.title}
                            image={props.department.image}
                />
                <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.department.title}
                        </Typography>
                        <Typography component="p">
                            {props.department.description}
                        </Typography>
                        <CardActions>
                            <Button  size="small" color="primary" href="/jobs">
                                Check {props.department.title} Steals
                            </Button>
                        </CardActions>
                </CardContent>
            </Card>
        </div>
    )

}

export default DepartmentsCard