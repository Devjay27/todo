import React, { Component } from "react";
import TodoList from "./components/TodoList";
import StateProvider from "./components/StateProvider";
import KeyStrokeHandler from "./components/KeyStrokeHandler";

class App extends Component {
  render() {
    return (
      <StateProvider>
        <KeyStrokeHandler>
          <TodoList />
        </KeyStrokeHandler>
      </StateProvider>
    );
  }
}

export default App;
