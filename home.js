import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
class Home extends Component {
  _changeData() {
    console.log("event called");
  }

  render() {
    return (
      <div>
        <h1>Registration Form {this.props.Name}</h1>
        <button onClick={this._changeData.bind(this)}>Change</button>
        <Link to="/about">Go to About</Link>
      </div>
    );
  }
}
function mapStatetToProps(state) {
  return {
    Name: state.rootReducer.Name
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStatetToProps);
