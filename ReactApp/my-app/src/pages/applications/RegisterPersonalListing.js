import React, { Component, Fragment } from "react";
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Face from '@material-ui/icons/Face'
import AccessibilityNew from '@material-ui/icons/AccessibilityNew'
import Work from '@material-ui/icons/Work'
import Assignment from '@material-ui/icons/Assignment'
import Button from '@material-ui/core/Button'
import HomepageImage from '../../images/Homepage.png'
import Header from '../../layout/Header'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'
import MyLocation from '@material-ui/icons/MyLocation'
import DateRange from '@material-ui/icons/DateRange'
import HighlightOff from '@material-ui/icons/HighlightOff'

class RegisterPersonalListing extends Component{
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
            <div>
                <div style={{float: 'left', position: 'relative', left: '9%'}}>
                    <div>
                    <AccountCircle style={{float: 'left', margin: '5px', marginRight: '22px'}} />  
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Full Name
                    </Typography>
                    </div>

                    <TextField
                        id='fullName'
                        name='fullName'
                        placeholder='Full Name'
                        value={this.props.user.fullName}
                        onChange = {this.props.handleChange('fullName')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                    <br />

                    <div>
                    <Face style={{float: 'left', margin: '5px', marginRight: '22px'}}/>    
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Age
                    </Typography>
                    </div>

                    <TextField
                        id='age'
                        name='age'
                        placeholder='Age'
                        value={this.props.user.age}
                        onChange = {this.props.handleChange('age')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                    <br />

                    <div>
                    <Phone style={{float: 'left', margin: '5px', marginRight: '22px'}}/>
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Mobile
                    </Typography>
                    </div>

                    <TextField
                        id='mobile'
                        name='mobile'
                        placeholder='Mobile'
                        value={this.props.user.mobile}
                        onChange = {this.props.handleChange('mobile')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />

                    <div>
                    <Email style={{float: 'left', margin: '5px', marginRight: '22px'}}/>
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Email
                    </Typography>
                    </div>

                    <TextField
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={this.props.user.email}
                        onChange = {this.props.handleChange('email')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />

                </div>
                <div style={{float: 'right', position: 'relative', right: '6%'}}>
                    <div>
                    <HighlightOff style={{float: 'left', margin: '5px', marginRight: '22px'}}/>
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Password
                    </Typography>
                    </div>

                    <TextField
                        id='password'
                        name='password'
                        placeholder='Password'
                        value={this.props.user.password}
                        onChange = {this.props.handleChange('password')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />

                    <div>
                    <MyLocation style={{float: 'left', margin: '5px', marginRight: '22px'}} />
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Country
                    </Typography>
                    </div>

                    <TextField
                        id='country'
                        name='country'
                        placeholder='Country'
                        value={this.props.user.country}
                        onChange = {this.props.handleChange('country')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                    
                    <div>
                    <DateRange style={{float: 'left', margin: '5px', marginRight: '22px'}} />
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Birth Date
                    </Typography>
                    </div>

                    <br />      
                        <TextField
                        id='bdate'
                        name='bdate'
                        type='date'
                        defaultValue=''
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.props.user.bdate}
                        style={{alignContent: 'center', marginBottom:'30px'} }
                        onChange={this.props.handleChange('bdate')}
                        />

                <div>        
                    <input
                    id='image'
                    name='image'
                    style={{display: 'none'}}
                    label='User Image'
                    type='file'
                    onChange={this.props.handleImage} 
                    ref={fileInput => this.fileInput = fileInput}           
                    />
                    <Button variant='outlined' onClick={() => this.fileInput.click()}>Upload Your Image</Button>
                </div>
            </div>
        </div>
                    <br /> 
                    <Button style={{background:'#1C164C', color:'#fff', position:'center', margin: '80px'}} onClick={() => this.props.handleShow('Professional')} >Next</Button>
                
                </form>
            </Paper>
            </div>
            </div>
        )
    }
}

export default RegisterPersonalListing;