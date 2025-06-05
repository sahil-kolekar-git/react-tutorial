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

//^ task 6:
//^ based on custom hook :

import React, { createRef, useRef, useState } from "react";
import countryData from "./country.json";

const App = () => {
  let [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
  });

  let handleSkills = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    if (!skills.includes(value)) {
      skills.push(value);
    } else {
      skills.splice(skills.indexOf(value), 1);
    }
  };
  let handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let { username, email, password, gender, country, skills } = data;
  return (
    <div className="container">
      <form>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
          required={true}
          value={username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmai.com"
          value={email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Select your gender : </label>
        <div id="gender" onChange={handleChange} value={gender}>
          <input type="radio" name="gender" value={"male"} /> <span>Male</span>
          <br />
          <input type="radio" name="gender" value={"female"} />
          <span>Female</span> <br />
          <input type="radio" name="gender" value={"other"} />
          <span>other</span> <br />
        </div>
        <label htmlFor="skills">Select skills : </label>
        <div id="skills" value={skills} onChange={handleSkills}>
          <input type="checkbox" name="skills" value={"Java"} />
          Java <br />
          <input type="checkbox" name="skills" value={"Sql"} />
          Sql <br />
          <input type="checkbox" name="skills" value={"Python"} />
          Python <br />
          <input type="checkbox" name="skills" value={"HTML"} />
          HTML <br />
          <input type="checkbox" name="skills" value={"JS"} />
          JS <br />
          <input type="checkbox" name="skills" value={"React"} />
          React <br />
          <input type="checkbox" name="skills" value={"ML"} />
          ML <br />
          <input type="checkbox" name="skills" value={"SpringBoot"} />
          SpringBoot <br />
          <input type="checkbox" name="skills" value={"Bootstrap"} />
          Bootstrap <br />
        </div>
        <label htmlFor="country">Select your country : </label>
        <div id="country" value={country}>
          <select name="country" id="country">
            {countryData.map((e, i) => {
              return (
                <option key={i} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" onClick={handleClick}>
          submit data
        </button>
      </form>
    </div>
  );
};

export default App;
