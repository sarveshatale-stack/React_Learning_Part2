import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsloggedIn: false
    };
  }
  render() {
    if (this.state.IsloggedIn) {
      return (
        <div>
          <h1>Welcome User</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome Guest</h1>
        </div>
      );
    }
  }
}
export default UserGreeting;
