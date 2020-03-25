import React, { Component, Fragment } from 'react'
import HomeImage from '../images/Homepage.png'
import Button from '@material-ui/core/Button'


export class Homepage extends Component {
    render() {
        return (
            <Fragment style={{width:'85%'}}>
                <Button variant="outlined" color="inherit" style={button1Style} size="large">
                Sign in
                </Button>
                <Button variant="outlined" color="inherit" style={button2Style} size="large">
                Register
                </Button>
            </Fragment>
        )
    }
}



const button1Style = {
    color:"#fff",
    position:'absolute',
    top: '75%',
    left: '38%',
    zIndex: '-1',
    maxWidth: '150x',
     maxHeight: '40px',
      minWidth: '150px', 
      minHeight: '60px'
}


const button2Style = {
    color:"#fff",
    position:'absolute',
    top: '75%',
    left: '54%',
    zIndex: '-1',
    maxWidth: '150x',
     maxHeight: '40px',
      minWidth: '150px', 
      minHeight: '60px'
}
export default Homepage
