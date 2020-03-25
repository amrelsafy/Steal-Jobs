import React, { Component, Fragment } from "react";
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Face from '@material-ui/icons/Face'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Book from '@material-ui/icons/Book'
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

class Applications extends Component{
    constructor(props){
        super(props);
    }

    handleChange = name => e => {
        this.setState({
          applicant: {...this.state.applicant, [name]: e.target.value}
        })
        console.log(this.state.applicant)
      }

    state = {
        user: {
            fullname: '',
            age: '',
            mobile: '',
            email: '',
            country: '',
            bdate: '',
            image: null,
            educationStatus: '',
            university: '',
            job: '',
            cv: null
        }
    }

    handleCV = e => {
        var file = e.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.readAsDataURL(file)
        console.log(reader.result)
        reader.onload = () => {
          this.setState({
            user: {...this.state.user, cv: reader.result}
          })
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
    }

    handleImage = e => {
        var file = e.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.readAsDataURL(file)
        console.log(reader.result)
        reader.onload = () => {
          this.setState({
            applicant: {...this.state.user, image: reader.result}
          })
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
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
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute', left: '50%', top: '80%',
            transform: 'translate(-50%, -50%)',
            width: '50%'
            }}>
                <form style={{marginTop:'20px'}}>
                    <h1>Sign up</h1>

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
                        id='Fullname'
                        name='Fullname'
                        placeholder='Full Name'
                        value={this.state.user.fullname}
                        onChange = {this.handleChange('fullname')} 
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
                        value={this.state.user.age}
                        onChange = {this.handleChange('age')} 
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
                        value={this.state.user.mobile}
                        onChange = {this.handleChange('mobile')} 
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
                        value={this.state.user.email}
                        onChange = {this.handleChange('email')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />

                    <div>
                    <AccessibilityNew style={{float: 'left', margin: '5px', marginRight: '22px'}} />
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
                        value={this.state.user.university}
                        onChange = {this.handleChange('university')} 
                        style={{alignContent: 'center', marginBottom:'30px'} }
                    />
                    <br />

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
                        value={this.state.user.country}
                        onChange = {this.handleChange('country')} 
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
                        value={this.state.user.bdate}
                        style={{alignContent: 'center', marginBottom:'30px'} }
                        onChange={this.handleChange('bdate')}
                        />

                <div>        
                    <input
                    id='image'
                    name='image'
                    style={{display: 'none'}}
                    label='User Image'
                    type='file'
                    onChange={this.handleImage} 
                    ref={fileInput => this.fileInput = fileInput}           
                    />
                    <Button variant='outlined' onClick={() => this.fileInput.click()}>Upload Your Image</Button>
                </div>
                    <Work />
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        Job
                    </Typography>

                    <br />
                    <Assignment />
                    <Typography
                        variant="h6"
                        style={{position: 'center'}}
                    >
                        CV
                    </Typography>
                    <input
                    id='cv'
                    name='cv'
                    style={{display: 'none'}}
                    label='CV'
                    type='file'
                    onChange={this.getBase64} 
                    ref={fileInput => this.fileInput = fileInput}           
                    />
                    <Button style={{marginBottom:'30px'}}variant='outlined' onClick={() => this.fileInput.click()}>Upload CV</Button>
                    <br />
                </form>
            </Paper>
            </div>
            </div>
        )
    }
}

export default Applications;