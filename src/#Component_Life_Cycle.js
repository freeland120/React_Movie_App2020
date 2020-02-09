import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello!");
  }

  state = {
    count: 0
  };

  add = () => {
    console.log("Add");
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    console.log("Minus");
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("Hi!");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default App;
