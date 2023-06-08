/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Col } from "react-bootstrap";

const User = (props) => {
  return (
    <Col md="3" style={{marginBottom: "1rem", width: "15rem", marginTop: "2rem"}}>
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
      <Card.Link className='cardlinks' href="#">Edit</Card.Link>
      <Card.Link className='cardlinks' href="#">Delete</Card.Link>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default User