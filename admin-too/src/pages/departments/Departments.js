import React, { Component, Fragment } from 'react'
import DepartmentsListing from './DepartmentsListing';
import Snackbar from '../../layout/Snackbar'
import axios from 'axios';

export class Departments extends Component {

    constructor(props){
        super(props);
        this.state = {
            departments: [],
            snackBarOpen: false,
            snackBarMessage: "",
            snackBarType: "success"
        }   
    }

    handleCloseSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };

    componentDidMount(){
        axios.get('http://localhost:3306/api/departments', {headers: headers})
        .then(res => {
          this.setState({departments: res.data.data});
        this.setState({   
          snackBarMessage: res.data.message,
          snackBarOpen: true,
          snackBarType: "success"
       });
      })
        .catch(err => {
          this.setState({
            snackBarOpen: true,
            snackBarMessage: err.message,
            snackBarType: "error"})
        }
        );
    }

    addDepartment = (department) => {
        axios.post('http://localhost:3306/api/departments',{
          "title": `${department.title}`,
          "description": `${department.description}`,
          "image": `${department.image}`,
          "created_by": `${department.created_by}`
        }, {headers: headers})
        .then(res => {
          this.setState({departments: [...this.state.departments, res.data.data]});
          console.log(res);
            this.setState({
              snackBarOpen: true,
              snackBarMessage: res.data.message,
              snackBarType: "success"})
          })
        .catch(err => {
         this.setState({   
            snackBarMessage: err.message,
            snackBarOpen: true,
            snackBarType: "error"
         })
        });
    }

    deleteDepartment = (id) => {
        axios.delete(`http://localhost:3306/api/departments/${id}`,{headers: headers})
        .then(res => {
          this.setState({departments: [...this.state.departments.filter(
          department => department.id !== id)]});
          this.setState({
            snackBarOpen: true,
            snackBarMessage: res.data,
            snackBarType: "success"});
          })      
          .catch(err => {
            this.setState({   
              snackBarMessage: err.message,
              snackBarOpen: true,
              snackBarType: "error"
            });
          });
    }

    updateDepartment = (department) => {
        axios.put(`http://localhost:3306/api/departments/${department.id}`, {
          "title": `${department.title}`,
          "description": `${department.description}`,
          "image": `${department.image}`
        }, {headers: headers})
        .then(res => {
          this.updateInState(res.data.data);
          this.setState({
            snackBarOpen: true,
            snackBarMessage: res.data.message,
            snackBarType: "success"});
        })
        .catch(err => {
          this.setState({   
             snackBarMessage: err.message,
             snackBarOpen: true,
             snackBarType: "error"
          });
      });
      }
      
      updateInState = (item) => {
        let newData = this.state.departments;
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id === item.id) {
            newData[i] = item;
            break;
          }
        }
        this.setState({departments: newData});
      }

    render() {
        return (
            <Fragment>
                <DepartmentsListing
                departments = {this.state.departments}
                updateDepartment = {this.updateDepartment}
                deleteDepartment = {this.deleteDepartment}
                addDepartment = {this.addDepartment}
                />

                <Snackbar 
                   type={this.state.snackBarType}
                   open={this.state.snackBarOpen}
                   autoHideDuration={4000}
                   message={this.state.snackBarMessage}
                   onClose={this.handleCloseSnackbar}
                   />
            </Fragment>
        )
    }
}

const headers = {
  Authorization: "Bearer " + localStorage.getItem("token")
};

export default Departments
