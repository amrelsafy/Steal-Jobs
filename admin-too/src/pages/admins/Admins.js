import React, { Component, Fragment } from 'react'
import AdminsListing from './AdminsListing';
import axios from 'axios'
import Snackbar from '../../layout/Snackbar'

export class Admins extends Component {

    constructor(props){
        super(props);
        this.state = {
            admins: [],
            snackBarOpen: false,
            snackBarMessage: "",
            snackBarType: "success"
        }   
    }

    handleCloseSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };

    componentDidMount(){
        axios.get('http://localhost:3306/api/admins', {headers: headers})
            .then(res => {
              this.setState({admins: res.data.data});
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

    addAdmin = (admin) => {
        axios.post('http://localhost:3306/api/admins',{
          "fullName": `${admin.fullName}`,
          "email": `${admin.email}`,
          "password": `${admin.password}`
        }, {headers: headers})
        .then(res => {
          this.setState({admins: [...this.state.admins, res.data.data]});
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

    deleteAdmin = (id) => {
        axios.delete(`http://localhost:3306/api/admins/${id}`, {headers: headers})
              .then(res => {
                this.setState({admins: [...this.state.admins.filter(
                admin => admin.id !== id)]});
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

    updateAdmin = (admin) => {
        axios.put(`http://localhost:3306/api/admins/${admin.id}`, {
            "fullName": `${admin.fullName}`,
            "email": `${admin.email}`,
            "password": `${admin.password}`
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
        let newData = this.state.admins;
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id === item.id) {
            newData[i] = item;
            break;
          }
        }
        this.setState({admins: newData});
      }

    render() {
        return (
            <Fragment>
              <AdminsListing
                admins = {this.state.admins}
                updateAdmin = {this.updateAdmin}
                deleteAdmin = {this.deleteAdmin}
                addAdmin = {this.addAdmin}
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

export default Admins
