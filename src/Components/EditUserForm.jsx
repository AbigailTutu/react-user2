/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

class EditUserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.userInfo.name,
            email: props.userInfo.email,
            password: props.userInfo.password,
            id: props.userInfo.id
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editUser(this.state.id, this.state)
        this.setState({
            name:"",
            email:"",
            password:""
        })
        this.props.closeModal()
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Name</label>
      <br />
      <input type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} style={{width: "20rem", height: "2.5rem"}} required/>
      <br></br>
      <br></br>
      <label>Email</label>
      <br />
      <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} style={{width: "20rem", height: "2.5rem"}} required/>
      <br></br>
      <br></br>
      <label>Password</label>
      <br />
      <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} style={{width: "20rem", height: "2.5rem"}} required/>
      <br></br>
      <br></br>
  
      <button type="submit" className="button">Submit</button>
    </form>
      </div>
    )
  }
}

export default EditUserForm