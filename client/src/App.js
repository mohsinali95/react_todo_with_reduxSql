import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux"
import Todo from "./todo"
import store from "./store/index"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo/>
      </Provider>
    );
  }
}

export default App;
