import React, { Component, Fragment } from 'react'
import CompaniesListing from './CompaniesListing';
import Snackbar from '../../layout/Snackbar'
import axios from 'axios'

export class Companies extends Component {

    constructor(props){
        super(props);
        this.state = {
            companies: [],
            snackBarOpen: false,
            snackBarMessage: "",
            snackBarType: "success"
        }   
    }

    handleCloseSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };

    componentDidMount(){
        axios.get('http://localhost:3306/api/companies', {headers: headers})
        .then(res => {
          this.setState({companies: res.data.data});
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

    addCompany = (company) => {
        axios.post('http://localhost:3306/api/companies',{
          "title": `${company.title}`,
          "location": `${company.location}`,
          "type": `${company.type}`
        }, {headers: headers})
        .then(res => {
          this.setState({companies: [...this.state.companies, res.data.data]});
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

    deleteCompany = (id) => {
        axios.delete(`http://localhost:3306/api/companies/${id}`, {headers: headers})
        .then(res => {
          this.setState({companies: [...this.state.companies.filter(
          company => company.id !== id)]});
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

    updateCompany = (company) => {
        axios.put(`http://localhost:3306/api/companies/${company.id}`, {
            "title": `${company.title}`,
            "location": `${company.location}`,
            "type": `${company.type}`
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
        let newData = this.state.companies;
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].id === item.id) {
            newData[i] = item;
            break;
          }
        }
        this.setState({companies: newData});
      }

    render() {
        return (
            <Fragment>
                <CompaniesListing
                  companies = {this.state.companies}
                  updateCompany = {this.updateCompany}
                  deleteCompany = {this.deleteCompany}
                  addCompany = {this.addCompany}
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

export default Companies;
