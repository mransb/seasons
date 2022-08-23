import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay.js";
import Spinner from "./Spinner.js";

class App extends Component {
  /**
   * Do one time setup
   * You can do data loading but is not recommended,
   * do it inside componentDidMount to keep code centralized and clear
   *
   * constructor(props) {
   *  super(props);
   * }
   */

  /**
   * Equivalent to this.state = {...} inside the constructor
   */
  state = {
    lat: null,
    errorMessage: "",
  };

  /**
   * Called one time after the component has been rendered
   * Do stuff like data loading or other one time actions
   * One time actions shouldn't go into the render method
   * because that's called very often, each time state changes
   * so you don't want lots of things being done repeatedly
   * and without the need to have them done
   *
   * constructor()
   * render()
   * componentDidMount()
   * componentDidUpdate()
   */
  componentDidMount() {
    console.log("componentDidMount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  /**
   * Called after each update / each run of setState
   * Do data loading that is needed each time a component
   * is updated like for example, make a network request every single time
   * a user clicks a button or inputs data
   */
  componentDidUpdate() {
    console.log("updated");
  }

  /**
   * The component was removed from the screen
   * Do clean up work inside here
   */
  componentWillUnmount() {}

  /**
   * Only return JSX
   */
  render() {
    console.log("render");
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Approve showing your location" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
