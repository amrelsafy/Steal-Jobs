import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import DepartmentsCard from './DepartmentsCard'
import DepartmentsFormDialog from './DepartmentsFormDialog'


export class DepartmentsListing extends Component {
    state = {
        searchString: ""
    }

    constructor(props){
        super(props)
    }
    
    onSearchChange = (e) => {
        if(e.target.value){
            this.setState({searchString: e.target.value})
        }
        else{
            this.setState({searchString: ''})
        }
    }

    render() {
        let filteredDepartments = this.props.departments.filter((department) => {
            return department.title.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1;
        })
        return (
            <Paper style={{width: '90%', left: '0', right: '0', margin: 'auto'}}>
            <div>
                <TextField style = {{padding: '24px', float:'right'}}
                            placeholder = "Search Departments"
                            onChange = {this.onSearchChange}
                />
                <Grid container spacing={24} style={{padding:'24px'}}>
                    {filteredDepartments.map(currentDepartment => (
                        <Grid job xs={12} sm={6} lg={4} xl={3}>
                             <DepartmentsCard department = {currentDepartment} /> 
                         </Grid>
                        ))}
                    </Grid>
            </div> 
            </Paper>   
        )
    }
}

export default DepartmentsListing
