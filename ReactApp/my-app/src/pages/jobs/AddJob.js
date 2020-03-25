import React, { Component } from 'react'

export class AddJob extends Component {
    state = {
        title: ''  
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addJob(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form style = {{display: 'flex' }} onSubmit = {this.onSubmit}>
                <input
                  type = "text"
                  name = "title"
                  placeholder = "New Job"
                  style = {{flex: '10'}}
                  value = {this.state.title}
                  onChange = {this.onChange}
                  />

                <input
                  type = "submit"
                  value = "Add Job"
                  style = {{flex: '1'}}
                  />    
            </form>
        )
    }
}

export default AddJob
