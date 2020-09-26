import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsloggedIn: false
    };
  }
  render() {
    //Variable Approach
    // let condition;

    // if (this.state.IsloggedIn) {
    //   condition = <div>Welcome ABC User</div>;
    // } else {
    //   condition = <div>Please login</div>;
    // }

    //If-Else Approach
    // if (this.state.IsloggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome User</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   );
    // }
    //Terninal Approach
    // return this.state.IsloggedIn ? (
    //   <div>Welcome ABC User</div>
    // ) : (
    //   <div>Please Log In</div>
    // );
    //SHort Circuit Approach
    return this.state.IsloggedIn && <div>Welcome ABC User</div>;
  }
}
export default UserGreeting;
