import React, { Component } from "react";
import Note from "./Components/Note";
class App extends Component {
  render() {
    return (
      <ul>
        <li>
          <Note />
        </li>
      </ul>
    );
  }
}

export default App;
