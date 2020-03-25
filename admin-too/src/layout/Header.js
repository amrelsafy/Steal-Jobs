import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from  '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import AdminIcon from '@material-ui/icons/AccountBox'
import UserIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import JobIcon from '@material-ui/icons/Work'
import DepartmentIcon from '@material-ui/icons/Domain'
import CompanyIcon from '@material-ui/icons/LocationCity'
import ApplicationIcon from '@material-ui/icons/Assignment'
import LogoutIcon from '@material-ui/icons/PowerOff'
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            "open": false,
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('ID');
        window.location.href = "/";
    }

    render() {
        return (
            <div>
            <div style = {{flexGrow:1}}>    
                <AppBar 
                    position = "static"
                    style={{backgroundColor: '#25212A'}}
                >
                <Toolbar >
                    <IconButton  onClick = {this.handleToggle}>
                        <MenuIcon style={{color: '#fff'}}/>
                    </IconButton>
                    <h1 style={{margin: 'auto'}}>
                        Steal Jobs Admin Panel
                        </h1>
                    </Toolbar>
                </AppBar>
            </div>
                <Drawer
                    docked = {false}
                    width = {200}
                    open = {this.state.open}
                    onRequestChange = {(open) => this.setState({open})}
                >
                    <AppBar />
                    
                    <MenuItem component={Link} to="/" onClick={this.handleToggle}>
                    <HomeIcon style={{marginRight:'10%'}}/> Home 
                    </MenuItem>

                    <MenuItem component={Link} to="/admins" onClick={this.handleToggle}>
                    <AdminIcon style={{marginRight:'10%'}}/> Admins
                    </MenuItem>

                    <MenuItem component={Link} to="/jobs" onClick={this.handleToggle}>
                    <JobIcon style={{marginRight:'10%'}}/> Jobs
                    </MenuItem>

                    <MenuItem component={Link} to="/departments" onClick = {this.handleToggle}>
                    <DepartmentIcon style={{marginRight:'10%'}} /> Departments
                    </MenuItem>

                    <MenuItem component={Link} to="/companies" onClick = {this.handleToggle}>
                    <CompanyIcon style={{marginRight:'10%'}} /> Companies
                    </MenuItem>

                    <MenuItem component={Link} to="/applications" onClick={this.handleToggle}>
                    <ApplicationIcon style={{marginRight:'10%'}}/> Applications 
                    </MenuItem>

                    <MenuItem component={Link} to="/users" onClick = {this.handleToggle}>
                    <UserIcon style={{marginRight:'10%'}} /> Users
                    </MenuItem>

                    <MenuItem  onClick = {this.handleLogout}>
                    <LogoutIcon style={{marginRight:'10%'}} /> Logout
                    </MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Header;