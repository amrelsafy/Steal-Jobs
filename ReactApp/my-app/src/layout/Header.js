import React,  {Fragment, Component} from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work'
import DepartmentIcon from '@material-ui/icons/Domain'
import LogoutIcon from '@material-ui/icons/ExitToApp'



export class Header extends Component {

    handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('ID');
        window.location.href = "/";
    }

    render() {
    return (
        <header style = {headerStyle}>
            <Fragment>
            <h1 style = {{padding: '0px'}}>Steal Jobs</h1>
            <Button variant="contained" style={{background: '#1C164C', color: '#fff'}} href='/'> 
            <HomeIcon style={{color: '#fff', marginRight: '10px'}}/>
             Home 
            </Button>
            <Button variant="contained" style={{background: '#1C164C', color: '#fff'}} href='/jobs'>
            <WorkIcon style={{color: '#fff', marginRight: '10px'}}/>
             Jobs 
            </Button>
            <Button variant="contained" style={{background: '#1C164C', color: '#fff'}} href='/departments'>
            <DepartmentIcon style={{color: '#fff', marginRight: '10px'}}/>
              Departments
            </Button>
            <Button variant="contained" style={{background: '#1C164C', color: '#fff'}}  onClick={this.handleLogout}>
            <LogoutIcon style={{color: '#fff', marginRight: '10px', float: 'right'}}/>
              Logout
            </Button>
            </Fragment>
            
        </header>
    )
    }
}

const headerStyle = {
background: '#1C164C',
color: '#fff',
textAlign: 'center',
padding: '1px'
}

export default Header