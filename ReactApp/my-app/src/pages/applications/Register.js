import React, { Component } from 'react'
import RegisterPersonalListing from './RegisterPersonalListing'
import RegisterProfessionalListing from './RegisterProfessionalListing'
import axios from 'axios'
import RegisterSubmissionDialog from './RegisterSubmissionDialog';

export class Register extends Component {

    handleChange = name => e => {
        this.setState({
          user: {...this.state.user, [name]: e.target.value}
        })
        console.log(this.state.user)
      }

    handleImage = e => {
        var file = e.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.readAsDataURL(file)
        console.log(reader.result)
        reader.onload = () => {
          this.setState({
            user: {...this.state.user, image: reader.result}
          })
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
    }

    handleShow = name => {
        this.setState({
            show: name
        })
    }

    handleSubmit = () => {
        axios.post('http://localhost:3306/api/users',{
            "fullName": `${this.state.user.fullName}`,
            "age": `${this.state.user.age}`,
            "mobile": `${this.state.user.mobile}`,
            "email": `${this.state.user.email}`,
            "password": `${this.state.user.password}`,
            "country": `${this.state.user.country}`,
            "bdate": `${this.state.user.bdate}`,
            "image": `${this.state.user.image}`,
            "company": `${this.state.user.company}`,
            "university": `${this.state.user.university}`,
            "yearOfGrade": `${this.state.user.yearOfGrade}`,
            "jobStatus": `${this.state.user.jobStatus}`,
            "experience": `${this.state.user.experience}`
        });
        this.setState({
            openDialog: true
        })
    }

    handleClickOpen = () =>{
        this.setState({openDialog: !this.state.openDialog})
      }

    handleClose = () => {
        this.setState({openDialog: false})
    }


    state = {
        user: {
            fullName: '',
            age: '',
            mobile: '',
            email: '',
            password: '',
            country: '',
            bdate: '',
            image: null,
            company: '',
            yearOfGrade: '',
            jobStatus: '',
            university: '',
            experience: ''
        },
    show: 'Personal',
    openDialog: false
    }
    
    render() {
        return (
            <div>
                {
                (this.state.show === 'Personal') ? 
                <RegisterPersonalListing user={this.state.user} handleChange={this.handleChange} handleImage={this.handleImage} handleShow={this.handleShow}/> :
                <RegisterProfessionalListing user = {this.state.user} handleChange = {this.handleChange} handleShow = {this.handleShow} handleSubmit = {this.handleSubmit   }/>
                 }
                <RegisterSubmissionDialog handleClickOpen = {this.handleClickOpen} handleClose = {this.handleClose} open = {this.state.openDialog} />
              
            </div>
        )
    }
}

export default Register
