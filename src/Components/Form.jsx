/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:""
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
        this.props.addUser(this.state)
        this.setState({
            name:"",
            email:"",
            password:""
        })
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} style={{marginTop: "2rem"}}>
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
  
      <button type="submit">Submit</button>
    </form>
      </div>
    )
  }
}

export default Form