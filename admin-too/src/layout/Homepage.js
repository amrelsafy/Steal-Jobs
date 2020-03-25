import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'


export class Homepage extends Component {
    render() {
        return (
            <Fragment style={{width:'85%'}}>
           <div style={{position: 'absolute',
                top: '75%',
                margin: 'auto',
                left: '0',
                right: '0',
                display: 'block',
                textAlign: 'center'
                }}>

                <Button variant="outlined" color="inherit" style={button1Style} size="large" href="/login">
                Sign in
                </Button>
                </div>
            </Fragment>
        )
    }
}



const button1Style = {
    color:"#fff",
    maxWidth: '150x',
     maxHeight: '40px',
      minWidth: '150px', 
      minHeight: '60px',
      marginRight: '2%'
}


const button2Style = {
    color:"#fff",
    maxWidth: '150x',
     maxHeight: '40px',
      minWidth: '150px', 
      minHeight: '60px',
      marginRight: '2%'
}
export default Homepage
