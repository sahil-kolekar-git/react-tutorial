//^ lec 3 : class and function component
/*

import React from "react";

function App() {
  return <h1>Hello World, this is from funtion component</h1>;
}

export default App;
*/
//! state using constructor
/*
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 101,
      name: "Allen",
    };
  }
  render() {
    let { name, id } = this.state;
    return (
      <h2>
        My name is {name} and id is {id}
      </h2>
    );
  }
}

export default App;
*/

//! state without using constructor
/*
import React from "react";

class App extends React.Component {
  state = {
    name: "Allen",
    id: 101,
  };
  render() {
    let { name, id } = this.state;
    return (
      <>
        <h1>Name : {name}</h1>
        <h1>Id : {id}</h1>
      </>
    );
  }
}

export default App;
*/
//! updating the state
/*
import React from "react";

class App extends React.Component {
  state = {
    id: 101,
    name: "Allen",
  };
  render() {
    setTimeout(() => {
      this.setState({
        id: 102,
        name: "Blake",
      });
    }, 5000);
    return (
      <>
        <h2>Name : {this.state.name}</h2>
        <h2>Id : {this.state.id}</h2>
      </>
    );
  }
}

export default App;
*/

//! iterating the state
/*
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: [
        { id: 101, name: "Allen" },
        { id: 102, name: "Blake" },
        { id: 103, name: "Scott" },
        {
          id: 104,
          name: "Martin",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.employee.map((e, i) => {
          return (
            <React.Fragment key={i}>
              <h3>{e.id}</h3>
              <h3>{e.name}</h3>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default App;
*/

//^ lec 4 : function components and useState() hook

//~ import React, { useState } from "react";
//! useState() will return array of two elements first element is data
//! and second element is updater function.
/*
function App() {
  let username = React.useState("Virat");
  let uid = React.useState(18);

  setTimeout(() => {
    username[1]("Rohit");
    uid[1](45);
  }, 5000);
  return (
    <>
      <h2>Name : {username[0]}</h2>
      <h2>Id : {uid[0]}</h2>
    </>
  );
}
*/
//! by destructuring the array
/*
import { useState } from "react";
function App() {
  let [userName, setUserName] = useState("Virat");
  let [uid, setUserId] = useState(18);

  setTimeout(() => {
    setUserName("Rohit");
    setUserId(45);
  }, 5000);
  return (
    <>
      <h3>Name : {userName}</h3>
      <h3>Id : {uid}</h3>
    </>
  );
}
export default App;
*/
//! passing array as stateValue in function component
/*
import React, { useState } from "react";
import Data from "./data.json";

function App() {
  let [data, setData] = useState(Data);
  console.log(data);

  return (
    <div className="container">
      <article>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v, i) => {
              let { id, image, title, description, price } = v;
              return (
                <tr key={i + 1}>
                  <td>{id}</td>
                  <td>
                    <img src="https://iili.io/dAyUpkJ.jpg" alt={id} />
                    ////todo using same image as other images are not visible
                  </td>
                  <td>{title}</td>
                  <td>${price}</td>
                  <td>{description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </div>
  );
}
export default App;
*/
//! passing array as stateValue in function component
/*
import React from "react";
import productData from "./productData.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = productData;
  }
  render() {
    return (
      <div className="container">
        <article>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((v, i) => {
                let { id, title, images, category, description, price } = v;
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      <img src={images[0]} alt="" />
                    </td>
                    <td>{category}</td>
                    <td>{description}</td>
                    <td>${price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </div>
    );
  }
}

export default App;
*/

//^ lec 5 : handling events in react
//! using function component
/*
import React from "react";

function App() {
  return (
    <div
      className="container"
      onClick={() => {
        document.querySelector(".container").style.background = "hotpink";
      }}
    ></div>
  );
}

export default App;
*/
/*
import React, { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  function increment(e) {
    console.log(e);

    setCount(count + 1);
  }
  let reset = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
*/
//! using class component
/*
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    //this.decrement = this.decrement.bind(this);
  }
  //* if we use function then we need to set value for this in the function
  // decrement() {
  //   this.setState({ count: this.state.count - 1 });
  //   console.log(this);
  // }
  decrement = function () {
    console.log(this);
    this.setState({ count: this.state.count - 1 });
  };

  //* in case of arrow function no need to set the value
  reset = () => {
    this.setState((prev) => {
      return { count: 0 };
    });
    console.log(this);
  };

  increment = (e) => {
    console.log(e);
    this.setState((prev) => {
      console.log(prev);
      return { count: prev.count + 1 };
    });
  };

  render() {
    let { count } = this.state;
    return (
      <>
        <h3>Count : {count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

{
  <button
    onClick={() => {
      this.setState({ count: count + 1 });
    }}
  >
    Increment
  </button>;
}

export default App;
*/
//^ lec 6 : props
//! sending props from function component
/*
import React from "react";
import Child from "./Child";

function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <Child name={"allen"} age={18} email={"allen@gmail.com"} sal={150} />
    </>
  );
}

export default App;
*/
//!sending props from class component
/*

import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Child
          name={"allen"}
          email={"allen@gmail.com"}
          skills={["Java", "Spring Boot"]}
        />
        <Child name={"bob"} email={"bob@gmail.com"} skills={["Java"]} />
        <Child
          name={"scott"}
          email={"scott@gmail.com"}
          skills={["Spring Boot"]}
        />
        <Child
          name={"martin"}
          email={"martin@gmail.com"}
          skills={["Java", "Hibernate", "Spring Boot"]}
        />
      </>
    );
  }
}

export default App;
*/

//! transferring state in the props and also function
/*
import React from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 101,
      name: "allen",
    };
  }
  // demo() {
  //   console.log(this); //~ value of this in this case in undefinded
  // }
  demo = () => {
    console.log(this); //~ in case of arrow function it will be that component
    console.log("Demo function");
  };
  render() {
    console.log(this); //~ in the render method only value will be that component
    //~ even though it is not an arrow function

    const { id, name } = this.state;
    return (
      <>
        <Child demo={this.demo} id={id} name={name} />
      </>
    );
  }
}

export default App;
*/

//* task of event handling
/*
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }
  state = {
    click_count: 0,
    over_count: 0,
  };
  over = () => {
    this.setState((prev) => {
      return { over_count: prev.over_count + 10 };
    });
  };

  render() {
    const { click_count, over_count } = this.state;
    return (
      <>
        <h3>Click_Count : {click_count}</h3>
        <h3
          onClick={(e) => {
            this.setState({ click_count: click_count + 5 });
          }}
        >
          Click_Count
        </h3>
        <h3>Hover_Count :{over_count}</h3>
        <h3 onMouseOver={this.over}>Hover_Count</h3>
      </>
    );
  }
}

export default App;
*/

//! sending props and children
/*
import React from "react";
import Child from "./Child";

const App = () => {
  return (
    <div>
      <Child name={"sahil"}>
        <h3>Fill the form</h3>
        <form>
          <input type="text" name="user" id="user" placeholder="enter name" />
          <button type="submit">Submit</button>
        </form>
      </Child>
    </div>
  );
};
export default App;
*/
//^ lec 7 : how to set default props
/*
import React from "react";
import Child from "./Child";
class App extends React.Component {
  render() {
    return (
      <>
        <h1></h1>
        <Child name={"allen"} id={123}></Child>
        <br />
        <Child name={"blake"} company={"TCS"} />
      </>
    );
  }
}

export default App;
*/

//! prop-types
/*
import React from "react";
import Child from "./Child";

class App extends React.Component {
  render() {
    return (
      <>
        <h2> Parent Component</h2>
        <Child id={"11"} name={"allen"} company={"tcs"}></Child>
      </>
    );
  }
}

export default App;
*/

//^ lec 8 : Conditional Rendering

//! in class component
/*
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }
  state = {
    isLoggedIn: false,
  };

  render() {
    let { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <>
          <div className="container">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Hey User</li>
            <li
              onClick={(e) => {
                this.setState({
                  isLoggedIn: !this.state.isLoggedIn,
                });
                console.log(this.state.isLoggedIn);
              }}
            >
              Logout
            </li>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li
              onClick={() => {
                this.setState({ isLoggedIn: !this.state.isLoggedIn });
              }}
            >
              Login
            </li>
            <li>Sign Up</li>
          </div>
        </>
      );
    }
  }
}

export default App;
*/

//! using switch case :
/*
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 10,
    };
  }

  render() {
    switch (this.state.value) {
      case 1:
        {
          console.log("Monday");
        }
        break;
      case 2:
        {
          console.log("Tuesday");
        }
        break;
      case 3:
        {
          console.log("Wednesday");
        }
        break;
      case 4:
        {
          console.log("Thrusday");
        }
        break;
      case 5:
        {
          console.log("Friday");
        }
        break;
      case 6:
        {
          console.log("Saturday");
        }
        break;
      case 7:
        {
          console.log("Sunday");
        }
        break;

      default:
        {
          console.log("Invalid Number");
        }
        break;
    }
  }
}

export default App;
*/

//! using ternary operator
/*
import React, { Component } from "react";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  handleClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  LoginInfo = class LoginInfo extends Component {
    render() {
      return (
        <div className="login">
          <li>Hey User</li>
          <li>Logout</li>
        </div>
      );
    }
  };

  LogoutInfo = class LogoutInfo extends Component {
    render() {
      return (
        <div className="logout">
          <li>Log In</li>
          <li>Sign Up</li>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        {this.state.isLoggedIn ? <this.LoginInfo /> : <this.LogoutInfo />}
      </div>
    );
  }
}

export default App;
*/

//! using && operator
/*
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
const App = () => {
  let [notification, setNotification] = React.useState([]);
  notification = [
    "this is first notification",
    "second notification",
    "third notification",
  ];
  return (
    <div>
      {notification.length > 0 && (
        <div className="main">
          <IoIosNotificationsOutline />
          <sup>{notification.length}</sup>
        </div>
      )}
    </div>
  );
};

export default App;
*/

//^ lec 9 : react ref

//! in function component
/*
import React from "react";
import { useRef } from "react";

const App = () => {
  let DivRef = useRef();

  console.log(DivRef);

  let handleClick = () => {
    console.log(DivRef);
    DivRef.current.style.background = "blue";
    DivRef.current.style.position = "absolute";
    DivRef.current.style.top = "100px";
  };

  return (
    <div
      ref={DivRef}
      onClick={handleClick}
      style={{ height: "200px", width: "200px", background: "skyblue" }}
    ></div>
  );
};

export default App;
*/

//! in class component
/*
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.divRef = React.createRef();
    console.log(this.divRef);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function () {
    console.log(this);
    this.divRef.current.style.background = "red";
  };
  render() {
    console.log(this.divRef);
    return (
      <div
        ref={this.divRef}
        style={{ height: "100px", width: "100px", background: "skyblue" }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default App;
*/

//! how to control media player using ref
/*
import React from "react";
import Hitman from "./videos/Hitman.mp4";
import { useRef } from "react";
import { useState } from "react";
const App = () => {
  let [play, setPlay] = useState(false);
  let videoRef = useRef();
  console.log(videoRef);

  let handleClick = () => {
    console.log(videoRef);
    setPlay(!play);
    if (play) videoRef.current.play();
    else videoRef.current.pause();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src={Hitman}
          ref={videoRef}
          onClick={handleClick}
          style={{ height: "500px", width: "500px" }}
          loop="true"
        ></video>
      </div>
    </>
  );
};

export default App;
*/

//! managing focus using ref
/*
import React from "react";

const App = () => {
  let inputRef = React.useRef();
  console.log(inputRef);

  let handleClick = (e) => {
    e.preventDefault();
    console.log(inputRef);

    inputRef.current.focus();
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Enter Name</label>

        <input
          type="text"
          name="username"
          id="username"
          required
          placeholder="enter the username"
          ref={inputRef}
        />
        <br />
        <label htmlFor="pwd">Enter Password</label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          required
          placeholder="enter the password"
        />
        <br />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
*/

//^ lec 10 : controlled and uncontrolled components

//! uncontrolled components
//~ by using formdata and Object.fromEntries
/*
import React from "react";

const App = () => {
  const formRef = React.createRef();
  console.log(formRef);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef);
    let formData = new FormData(formRef.current);
    let data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
        />
        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="enter password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
*/

//~ by using value property
/*
import React, { useState } from "react";
const App = () => {
  let [username, setUsername] = useState("");
  let [pwd, setPwd] = useState("");
  let userRef = React.useRef();
  let pwdRef = React.useRef();

  let handleChange = () => {
    setUsername(userRef.current.value);
    setPwd(pwdRef.current.value);
  };

  let handleClick = (e) => {
    e.preventDefault();
    let obj = {
      username,
      pwd,
    };
    console.log(obj);
    userRef.current.value = "";
    pwdRef.current.value = "";
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          ref={userRef}
          onChange={handleChange}
        />
        <input
          type="password"
          name="pwd"
          id="pwd"
          value={pwd}
          ref={pwdRef}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
*/

//! controlled components
/*
import React, { useState } from "react";

let App = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  let handleClick = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
*/

//! controlled components in class based component
/*
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleClick = (e) => {
    e.preventDefault();

    let { userName, password } = this.state;
    let obj = {
      userName,
      password,
    };
    console.log(obj);
  };
  render() {
    let { userName, password } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            value={userName}
            onChange={(e) => {
              this.setState({ ...this.state, userName: e.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              this.setState({
                ...this.state,
                password: e.target.value,
              });
            }}
          />
          <button type="submit" onClick={this.handleClick}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
*/

//^ form handling using single state in function component
//! in function component
/*
import React from "react";
import CountryData from "./countryData.json";

const App = () => {
  let [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
  });

  let { username, email, password, gender, country, skills } = data;

  let handleSkills = (e) => {
    let val = e.target.value;
    if (data.skills.includes(val) == false) data.skills.push(val);
    else data.skills.splice(data.skills.indexOf(val), 1);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter name : </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="enter name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Enter email : </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="enter email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Enter password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="enter password"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Select your gender</label>
        <div id="gender" value={gender} onChange={handleChange}>
          <input type="radio" name="gender" value="male" />
          <span>Male</span>
          <br />
          <input type="radio" name="gender" value="female" />
          <span>Female</span>
          <br />
          <input type="radio" name="gender" value="others" />
          <span>Others</span>
          <br />
        </div>
        <label htmlFor="skills">Select skills : </label>
        <div id="skills" value={skills} onChange={handleSkills}>
          <input type="checkbox" name="skills" value="java" />
          <span>Java</span>
          <br />
          <input type="checkbox" name="skills" value="python" />
          <span>Pyton</span>
          <br />
          <input type="checkbox" name="skills" value="sql" />
          <span>SQL</span>
          <br />
          <input type="checkbox" name="skills" value="spring" />
          <span>Spring</span>
          <br />
          <input type="checkbox" name="skills" value="javascript" />
          <span>JavaScript</span>
          <br />
          <input type="checkbox" name="skills" value="react" />
          <span>React</span>
          <br />
        </div>
        <label htmlFor="country">Select country : </label>
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          {CountryData.map((v, i) => {
            return (
              <option value={v.name} key={i}>
                {v.name}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
*/

//! in class component
/*
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      skills: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSkills = (e) => {
    let val = e.target.value;
    if (!this.state.skills.includes(val)) this.state.skills.push(val);
    else this.state.skills.splice(this.state.skills.indexOf(val), 1);
  };
  render() {
    let { username, skills } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username : </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="Enter username"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="skills">Select skills : </label>
          <div id="skills" onChange={this.handleSkills} value={skills}>
            <input type="checkbox" name="skills" value={"java"} />
            <span>Java</span>
            <br />
            <input type="checkbox" name="skills" value={"python"} />
            <span>Python</span>
            <br />
            <input type="checkbox" name="skills" value={"sql"} />
            <span>SQL</span>
            <br />
            <input type="checkbox" name="skills" value={"spring"} />
            <span>Spring</span>
            <br />
            <input type="checkbox" name="skills" value={"javascript"} />
            <span>JavaScript</span>
            <br />
            <input type="checkbox" name="skills" value={"react"} />
            <span>React</span>
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
*/

//^ faker js
/*
import { faker, Faker } from "@faker-js/faker";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = { name: faker.animal.dog(), image: faker.image.url() };
  }
  render() {
    return (
      <>
        <div
          className="container"
          style={{
            width: "100vw",
            height: "100vh",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={this.state.image}
            alt=""
            style={{ width: 50 + "%", height: 50 + "%" }}
          />
          <h2
            style={{
              width: 50 + "%",
              height: 10 + "%",
              padding: "auto auto",
              margin: "10px 10px",
            }}
          >
            {this.state.name}
          </h2>
          <button
            style={{ width: 20 + "%", height: 10 + "%" }}
            onClick={() => {
              this.setState({
                name: faker.animal.dog(),
                image: faker.image.url(),
              });
            }}
          >
            change image
          </button>
        </div>
      </>
    );
  }
}

export default App;
*/

//^ lec 11: lifecycle method in class component
/*
import axios from "axios";
import React from "react";
import { BiLogIn } from "react-icons/bi";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    console.log("constructor method");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps method");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount method");
    //~ first way by using async await
    // let data = async () => {
    //   let apidata = await fetch("https://api.escuelajs.co/api/v1/products");
    //   let data = await apidata.json();
    //   this.setState({ data: data });
    // };
    //  data();

    //~ using promise

    // let data = fetch("https://api.escuelajs.co/api/v1/products");
    // data.then(
    //   (val) => {
    //     val.json().then((data) => {
    //       this.setState({ data: data });
    //     });
    //   },
    //   (e) => e
    // );

    //~ third way by using axios
    axios.get("https://api.escuelajs.co/api/v1/products").then(
      (val) => {
        this.setState({ data: val.data });
      },
      (e) => e
    );
  }
  render() {
    console.log("render method ");
    console.log(this.state.data);

    return (
      <div className="main">
        <article>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elem, index) => {
                let { id, image, title, description, price } = elem;
                return (
                  <tr key={index}>
                    <td>{id - 3}</td>
                    <td>
                      <img src={elem.images[0]} alt="not found" />
                    </td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </div>
    );
  }
}

export default App;
*/
//~ rendering  phase
/*
import { tr } from "@faker-js/faker";
import axios from "axios";
import React from "react";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    console.log("constructor method");
    this.state = { data: [] };
  }
  static getDerivedStateFromProps() {
    console.log("static getDerivedStateFromProps method");
    return null;
  }
  render() {
    console.log("render method");
    console.log(this.state.data);

    return (
      <>
        <div className="main">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val, i) => {
                let { id, price, title, images, description } = val;
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      <img src={images[0]} alt="" />
                    </td>
                    <td>{description}</td>
                    <td>{price}.0$</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  componentDidMount() {
    console.log("Component did mount method");
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((value) => this.setState({ data: value.data }));
  }
}

export default App;
*/

//~ updating phase
/*
import React from "react";
import Child from "./Child";

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor method");
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render method");

    return (
      <>
        <Child count={this.state.count} />
        <button onClick={this.handleClick}>update count</button>
      </>
    );
  }
  static getDerivedStateFromProps(prop, state) {
    console.log(prop);
    console.log(state);

    console.log("static method getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount method");
  }
}
export default App;
*/

//^ lec 12 : lifecycle methods in function components

//^ SpeechRecongnition by using React
/*
import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";

const App = () => {
  let handleClick = (e) => {
    console.log(e);
    let SpeechRecogniton =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    let recongintion = new SpeechRecogniton();
    recongintion.addEventListener("result", (event) => {
      console.log(event.results[0][0].transcript);
    });
    recongintion.start();
  };
  return (
    <div>
      <button
        style={{
          height: "2em",
          width: "2em",
          background: "black",
          color: "white",
          border: "1px solid white",
          borderRadius: "50%",
          margin: "1em",
        }}
        onClick={handleClick}
      >
        <CiMicrophoneOn />
      </button>
    </div>
  );
};

export default App;
*/
