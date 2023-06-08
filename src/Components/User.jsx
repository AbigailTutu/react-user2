/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Col, Button } from "react-bootstrap";

const User = (props) => {
    const handleDelete = (e) => {
       e.preventDefault()
       props.deleteUser(props.userInfo.id)
    }
  return (
    <Col md="3" style={{marginBottom: "1rem", width: "18rem", marginTop: "2rem"}}>
    <Card style={{backgroundColor: "pink"}}>
    <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">
        Users
      </Card.Subtitle>
      <Card.Title>Name: {props.userInfo.name}</Card.Title>
      <Card.Text>
        <p>Email: {props.userInfo.email}</p>
        <p>Password: {props.userInfo.password}</p>
      </Card.Text>
      <Card.Link className='cardlinks' href="#"><Button variant="primary" >Edit</Button></Card.Link>
      <Card.Link className='cardlinks' href="#"><Button variant="danger" onClick={handleDelete}>Delete</Button></Card.Link>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default User