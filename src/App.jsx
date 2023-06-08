/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import Form from "./Components/Form";
import Users from "./Components/Users";

 class App extends Component {
  constructor(props){
        super(props);
        this. state = {
          users: [
            {
                name: "Bernice",
                email: "bernice@gmail.com",
                password: "577899"
            },
    
            {
              name: "Makafui",
              email: "makafui@gmail.com",
              password: "098765"
            },
    
            {
              name: "Elorm",
              email: "elorm@gmail.com",
              password: "123456"
            },
          ]
        }
      }

      addNewUser = (user) => {
         this.setState({
          users: [...this.state.users, user]
         })
      }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Form addUser={this.addNewUser}/>
            </Col>
            <Col>
              <Users userData={this.state.users}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
