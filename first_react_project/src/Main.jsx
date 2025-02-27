//^ lec 1 : creating root element and creating react element by using createElement() method
/*
import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

let h1 = React.createElement("h1", { id: "h1" }, "Hello World");

let form = React.createElement(
  "form",
  null,
  React.createElement("input", {
    type: "text",
    placeholder: "enter your name",
  }),
  React.createElement("input", {
    type: "password",
    placeholder: "enter password",
  }),
  React.createElement("button", { type: "submit" }, "submit")
);

ReactDOM.createRoot(document.querySelector("#root")).render(form);
*/
//^ lec 2 : creating react element by using jsx
/*
import React from "react";
import ReactDOM from "react-dom/client";
*/
//! this will add extra node to the DOM tree.

/*
let h1 = <h1>Hello World</h1>;

let allContent = (
  <article>
    <h1>First line </h1>
    <span>This is span tag</span> <br />
    <span className="s2">Fill the from data</span>
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </article>
);
*/
//! to avoid the creation of extra node we use "react fragments" that is empty tag to wrap multiple elements
/*
let fragments = (
  <>
    <h1>First line</h1>
    <article>This is one article</article>
    <form action="">
      <label htmlFor="state">Select your state</label>
      <select name="state" id="state">
        <option value="mh">Maharashtra</option>
        <option value="g">Goa</option>
        <option value="s">Sikkim</option>
        <option value="d">Delhi</option>
      </select>

      <label for="state">Select States</label>
      <input id="state" list="states" />
      <datalist id="states">
        <option value="maharashtra"></option>
        <option value="Tamilnadu"></option>
        <option value="kerala"></option>
        <option value="Goa"></option>
      </datalist>
    </form>
  </>
);
*/
//! performing operation using {} expression in jsx
//! we cannot use if-else inside jsx but we can use ternary opearator
/*
var name = "sahil";
var res = "";
if (res) {
  name = "sahil kolekar";
} else {
  name = "";
}
let operation = (
  <>
    <h1>{2 + 2}</h1> //& this will give sum of two numbers
    <h1>2+2</h1> //& this will print 2+2 on the browser
    <h2>{name}</h2>
    <h1>{10 > 12 ? "Done something" : "Don't do anything"}</h1>
    <h2>{res}</h2>
  </>
);
ReactDOM.createRoot(document.querySelector("#root")).render(operation);
*/

//^ lec 3 : function and class component
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
*/

// ^ common
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
