import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
class About extends Component {
  render() {
    return (
      <div>
        <h1>Hello About {this.props.Name}</h1>
        <Link to="/">Go to Home</Link>
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
