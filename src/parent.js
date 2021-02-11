import React, { Component } from "react";
import Child from "./child";
// import { UserConsumer } from "./data_context";
import UserContext from './data_context';

class Parent extends Component {
    static username = UserContext;
  render() {
    return (
      <React.Fragment>
        <h2>Hello</h2>
        {/* <UserConsumer> */}
          {(username) => {
            return <div> {username}</div>;
          }}
        {/* </UserConsumer> */}
        <Child></Child>
      </React.Fragment>
    );
  }
}

export default Parent;
