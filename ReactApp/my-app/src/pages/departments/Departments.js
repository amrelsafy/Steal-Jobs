import React, { Component, Fragment } from 'react'
import axios from 'axios'
import DepartmentsListing from './DepartmentsListing';
import HomepageImage from '../../images/Homepage.png'
import Header from '../../layout/Header'


export class Departments extends Component {

    state = {
        departments: []
    }

    componentDidMount(){
        axios.get('http://localhost:3306/api/departments')
        .then(res => this.setState({departments: res.data.data}))
    }

    render() {
        return (
            <Fragment>
                
            <div style = {{
                width: '100%',
                height: '768px',
                backgroundImage: `url(${HomepageImage})`,
                backgroundSize: 'cover',
                }}>

            <Header />
                <DepartmentsListing departments={this.state.departments}/>
               </div> 
            </Fragment>
        )
    }
}

export default Departments
