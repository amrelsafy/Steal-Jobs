import React, { Component } from 'react'
import { TextField, Paper, Fab } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios';
import HomepageImage from '../../images/Homepage.png'
import Header from '../../layout/Header'



export class Login extends Component {

   state = {
       user: {
           email: '',
           password: ''
       },

       admins: []
   }

    handleChange = name => e => {
        this.setState({
          user: {...this.state.user, [name]: e.target.value}
        })
        console.log(this.state.user);
      }

    handleSubmit = () => {
        axios.post('http://localhost:3306/api/auth/loginU',{
            'email' : `${this.state.user.email}`,
            'password' : `${this.state.user.password}`
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("ID", res.data.user_id)

            window.location.href="/departments";
        })
        .catch(err => console.log(err.message));
    //    console.log(this.isLoggedIn());

    //    while(!this.isLoggedIn()){
    //        if(this.isLoggedIn()){
    //            //window.location.href = "/admins"
    //            console.log("Entered if")
    //        }
    //        console.log(this.isLoggedIn())
    //    }
    }

    // isLoggedIn = () => {
    //     const token = localStorage.getItem("token");
    //     return token && !this.isTokenExpired(token);
    // }

    // isTokenExpired = token => {
    //     const expirationDate = this.getTokenExpirationDate(token);
    //     return expirationDate < new Date();
    //   }

    // getTokenExpirationDate = encodedToken => {
    //     const token = decode(encodedToken);
    //     if (!token.exp) {
    //       return null;
    //     }
    // }       

    render() {
        return (
            <div style = {{
                width: '100%',
                height: '768px',
                backgroundImage: `url(${HomepageImage})`,
                backgroundSize: 'cover',
                }}>
            <Header />
            <div>
                <Paper  container
            style={paperStyle}
            zDepth={5}>
                <h1>Login</h1>
                <div>
                <TextField
                    id = "email"
                    name = "email"
                    label = "Email"
                    style = {textFieldStyle}
                    value = {this.state.user.email}
                    
                    onChange = {this.handleChange('email')}
                ></TextField>
                </div>
                <div>
                <TextField
                    id = "password"
                    name = "password"
                    label = "Password"
                    style = {textFieldStyle}
                    type = 'password'
                    value = {this.state.user.password}
                     
                    onChange = {this.handleChange ('password')}
                ></TextField>
                </div>

                <div>      
                <Fab variant="extended" style={{margin:'10px', padding: '0 30px',}} aria-label="delete" className={useStyles.fab} onClick={this.handleSubmit}>
                Login
                </Fab>
                </div>

                </Paper>
            </div>
            </div>
        )
    }
}


const textFieldStyle = {
    margin: '10px',
    padding: '10px',
    width: '40%',
    display: 'grid',
    margin: 'auto',
    alignItems: 'center' 
}

const paperStyle = {
    // minHeight: '85%',
    // minWidth: '40%',
    // maxHeight: '98%',
    // maxWidth: '98%',
    // margin: '4%',
    // textAlign: 'center',
    // display: 'inline-block',
    // alignItems: 'center'
    minHeight: '85%',
    minWidth: '40%',
    maxHeight: '98%',
    maxWidth: '50%',
    margin: '4%',
    textAlign: 'center',
    display: 'block',
    alignItems: 'center',
    margin: 'auto',
    paddingBottom: '30px',
    paddingTop: '30px',
    marginTop: '10%',
  };

 const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(120),
    }
  }));

export default Login

