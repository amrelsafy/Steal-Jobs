import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from  '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import UserIcon from '@material-ui/icons/AccountBox'
import JobIcon from '@material-ui/icons/Work'
import DepartmentIcon from '@material-ui/icons/Domain'
import CompanyIcon from '@material-ui/icons/LocationCity'
import JobTable from '../components/tables/JobTable'
import DepartmentTable from '../components/tables/DepartmentTable'
import CompanyTable from '../components/tables/CompanyTable'
import UserTable from '../components/tables/UserTable'
import HomeImage from '../images/Homepage.png'

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            "open": false,
            "show": null
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    showJob = () => {
        this.setState({show: 'Jobs', open: false});
    };

    showDepartment = () => {
        this.setState({show: 'Departments', open: false});
    };

    showCompany = () => {
        this.setState({show: 'Companies', open: false});
    };

    showUser = () => {
        this.setState({show: 'Users', open: false});
    };

    render() {
        let content = null;

        switch(this.state.show){
            case 'Jobs':
                content =  <JobTable />
              break;
            case 'Departments':
               content = <DepartmentTable />
              break;
            case 'Companies':
              content = <CompanyTable />
              break;
            case 'Users':
              content = <UserTable />
              break;
            default: content = null;
        }

        return (
            <div>
            <div style = {{flexGrow:1}}>    
                <AppBar 
                    position = "static"
                    style={{backgroundColor: '#25212A', justifyContent: 'center', alignItems: 'center', flexGrow: 1}}
                >
                <Toolbar>
                    <IconButton  onClick = {this.handleToggle}>
                        <MenuIcon style={{color: '#fff'}}/>
                    </IconButton>
                    <h1 style={{fontWeight: '3500'}}>
                        Career Portal Admin Panel
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
                    <MenuItem to="/jobs">
                    <JobIcon />
                    </MenuItem>
                    <MenuItem onClick = {this.showDepartment}><DepartmentIcon /></MenuItem>
                    <MenuItem onClick = {this.showCompany}><CompanyIcon /></MenuItem>
                    <MenuItem onClick = {this.showUser}><UserIcon /></MenuItem>
                </Drawer>

                <Paper style={paperStyle} zDepth={5}>
                    <h1>{this.state.show}</h1>
                    {content}
                </Paper>
            </div>
        )
    }
}

const paperStyle = {
    minHeight: '85%',
    minWidth: '90%',
    maxHeight: '98%',
    maxWidth: '98%',
    margin: '4%',
    textAlign: 'center',
    display: 'inline-block'
};

export default Header;