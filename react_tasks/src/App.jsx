//^ task 1 : to-do list
/*
import React, { Component } from "react";
import "./app.css";
class App extends Component {
  state = {
    listTasks: [],
    inputValue: "",
  };
  handleChange = (e) => {
    this.setState({
      listTasks: this.state.listTasks,
      inputValue: e.target.value,
    });
  };
  handleClick = (e) => {
    if (this.state.inputValue.trim() !== "") {
      this.setState({
        listTasks: [...this.state.listTasks, this.state.inputValue],
        inputValue: "",
      });
    }
  };
  render() {
    const { listTasks, inputValue } = this.state;
    return (
      <>
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Task</button>
        <h3>To-Do List</h3>
        {listTasks.map((value, index) => {
          return (
            <ul key={index}>
              <li>{value}</li>
            </ul>
          );
        })}
      </>
    );
  }
}

export default App;
*/
//^ task 2 : sending data from child to parent component
//!using class component
/*
import React from "react";
import Child from "./Child";

class App extends React.Component {
  state = {
    message: "",
  };
  updateMessage = (msg) => {
    console.log(msg);

    this.setState({
      message: msg,
    });
  };
  render() {
    return (
      <>
        <h3>{this.state.message}</h3>
        <Child update={this.updateMessage}></Child>
      </>
    );
  }
}

export default App;
*/

//! using function component
/*
import React, { useState } from "react";
import Child from "./Child";

function App() {
  let [message, updateMessage] = useState("initial message");
  return (
    <>
      <h3>{message}</h3>
      <Child update={updateMessage} />
    </>
  );
}

export default App;
*/

//^ task 3 :
/*
import React from "react";
class App extends React.Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    let { isLoggedIn } = this.state;
    return (
      <>
        <h2>{isLoggedIn ? "Welocome back, User!" : "Please log in"}</h2>
      </>
    );
  }
}

export default App;
*/
//^ task 4 :
/*
import React, { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import "./app.css";

const App = () => {
  let [mode, setMode] = useState(true);
  const Dark = () => {
    return (
      <>
        <div className="dark"></div>
      </>
    );
  };
  const Light = () => {
    return (
      <>
        <div className="white"></div>
      </>
    );
  };
  let handleClick = () => {
    setMode((prev) => !prev);
    console.log(mode);
  };
  return (
    <>
      {mode ? <Dark /> : <Light />}
      <button onClick={handleClick}>
        <MdOutlineLightMode />
      </button>
    </>
  );
};

export default App;
*/

//^ task 5 :
/*
import React from "react";
import Child from "./Child";

const App = () => {
  let inputRef = React.createRef();

  const handleClick = () => {
    console.log(inputRef);
    inputRef.current.value = "";
  };
  return (
    <>
      <Child ref={inputRef} />
      <button onClick={handleClick}>button</button>
    </>
  );
};

export default App;
*/
