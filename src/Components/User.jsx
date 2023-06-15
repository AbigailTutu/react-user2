/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} style={{color: "blueviolet"}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col
        md="3"
        style={{ marginBottom: "1rem", width: "18rem", marginTop: "2rem" }}
      >
        <Card style={{ backgroundColor: "pink" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Users</Card.Subtitle>
            <Card.Title>Name: {props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Password: {props.userInfo.password}</p>
            </Card.Text>
            <Card.Link className="cardlinks" href="#">
              <Button variant="primary" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link className="cardlinks" href="#">
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;
