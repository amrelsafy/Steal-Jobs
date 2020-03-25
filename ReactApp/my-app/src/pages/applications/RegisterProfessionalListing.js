import React, { Component, Fragment } from "react";
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Face from '@material-ui/icons/Face'
import AccessibilityNew from '@material-ui/icons/AccessibilityNew'
import Work from '@material-ui/icons/Work'
import Assignment from '@material-ui/icons/Assignment'
import Assessment from '@material-ui/icons/Assessment'
import Button from '@material-ui/core/Button'
import HomepageImage from '../../images/Homepage.png'
import Header from '../../layout/Header'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import MyLocation from '@material-ui/icons/MyLocation'
import DateRange from '@material-ui/icons/DateRange'

class RegisterProfessionalListing extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style = {{
                width: '100%',
                height: '768px',
                backgroundImage: `url(${HomepageImage})`,
                backgroundSize: 'cover',
                }}>

            <Header />
            <div>
            
            <Paper style={{display: 'flex',
            justifyContent: 'center',
            position: 'absolute', left: '0', right: '0',
            margin: 'auto',
            width: '50%'
            }}>
                <form style={{marginTop:'20px', width: '80%'}}>
                    <h1 style={{margin: '30px',
                                marginLeft: '40%'}}>Sign up</h1>
                <div style={{position: 'relative', left: '30%'}}>
                    <div>
                    <Work style={{float: 'left', margin: '5px', marginRight: '22px'}} />  
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Current Company
                    </Typography>
                    </div>

                    <TextField
                        id='company'
                        name='company'
                        placeholder='Company'
                        value={this.props.user.company}
                        onChange = {this.props.handleChange('company')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                    <br />

                    <div>
                    <DateRange style={{float: 'left', margin: '5px', marginRight: '22px'}}/>    
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Year of Graduation
                    </Typography>
                    </div>

                    <TextField
                        id='yearofGrad'
                        name='yearOfGrad'
                        placeholder='Graduation Year'
                        value={this.props.user.yearOfGrade}
                        onChange = {this.props.handleChange('yearOfGrade')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                    <br />

                    <div>
                    <AccessibilityNew style={{float: 'left', margin: '5px', marginRight: '22px'}}/>
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        University
                    </Typography>
                    </div>

                    <TextField
                        id='university'
                        name='university'
                        placeholder='University'
                        value={this.props.user.university}
                        onChange = {this.props.handleChange('university')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />

                    <div>
                    <Assignment style={{float: 'left', margin: '5px', marginRight: '22px'}}/>
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Job Status
                    </Typography>
                    </div>

                    <TextField
                        id='jobStatus'
                        name='jobStatus'
                        placeholder='Job Status'
                        value={this.props.user.jobStatus}
                        onChange = {this.props.handleChange('jobStatus')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />

                    <div>
                    <Assessment style={{float: 'left', margin: '5px', marginRight: '22px'}} />
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Experience
                    </Typography>
                    </div>

                    <TextField
                        id='experience'
                        name='experience'
                        placeholder='Experience'
                        value={this.props.user.experience}
                        onChange = {this.props.handleChange('experience')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                </div>
                    <div style={{position: 'relative', left: '30%', marginBottom: '20px'}}>
                    <Button variant= "outlined" style={{position:'center', marginRight:'100px'}} onClick={() => this.props.handleShow('Personal')} >Back</Button>
                    <Button style={{background:'#1C164C', color:'#fff', position:'center'}} onClick={() => this.props.handleSubmit()} >Submit</Button>
                    </div>
                </form>
            </Paper>
            </div>
            </div>
        )
    }
}

export default RegisterProfessionalListing;