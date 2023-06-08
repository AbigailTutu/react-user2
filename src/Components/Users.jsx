/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {Container, Row} from "react-bootstrap"
import User from "./User";

const Users = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {
            props.userData.map((user) => {
              return <User userInfo={user} key={user.id} deleteUser={props.deleteUser}/>
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default Users;