import React, { Component } from "react";

class Correctness extends Component {
  render() {
    const { theme, answer } = this.props;

    return (
      <div>
        <div className={theme} role="alert">
          {answer}
        </div>
      </div>
    );
  }
}

export default Correctness;
