/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Components/Form";
import Users from "./Components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Bernice",
          email: "bernice@gmail.com",
          password: "577899",
          id: "567878",
        },

        {
          name: "Makafui",
          email: "makafui@gmail.com",
          password: "098765",
          id: "5462788",
        },

        {
          name: "Elorm",
          email: "elorm@gmail.com",
          password: "123456",
          id: "272789",
        },
      ],
    };
  }

  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  deleteUser = (id) => {
    let deletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: deletedUsers,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((users) =>
        users.id === id ? updatedUser : users
      ),
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Form addUser={this.addNewUser} />
            </Col>
            <Col>
              <Users
                userData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
