//! reciving props in function component
/*
import React from "react";

function Child(props) {
  const { name, age, email, sal } = props;

  return (
    <>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Email : {email}</h3>
      <h3>Salary : {sal}$</h3>
    </>
  );
}

export default Child;
*/

//! reciving props in class component
/*
import React from "react";

class Child extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props); //~ this.props will return object
    let { name, email, skills } = this.props;
    return (
      <>
        <h5>Name : {name}</h5>
        <h5>Email : {email}</h5>
        <ul>
          Skills
          {skills.map((v, i) => {
            return <li key={i + 1}>{v}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Child;
*/

//! reciving data from class component in function component
/*
import React from "react";
function Child(props) {
  let { id, name, demo } = props;
  return (
    <>
      <h1>Name : {name}</h1>
      <h1>Id : {id}</h1>
      <h1>{demo()}</h1>
    </>
  );
}

export default Child;
*/

//^ lec 7 : default props
//! in function component
/*
import React from "react";
function Child(props) {
  let { name, id, company } = props;
  return (
    <>
      <h3>Name :{name || "NA"}</h3>
      <h3>Id : {id || "NA"}</h3>
      <h3>Company : {company || "NA"}</h3>
    </>
  );
}

export default Child;
*/

//! in class component

//~ first way by using || operator
/*
import React, { Component } from "react";

class Child extends Component {
  render() {
    let { id, name, company } = this.props;
    return (
      <>
        <h3>Name : {name || "NA"}</h3>
        <h3>Id : {id || "NA"}</h3>
        <h3>Company : {company || "NA"}</h3>
      </>
    );
  }
}

export default Child;
*/

//~ second way by using defaultProps property
/*
import React, { Component } from "react";

class Child extends Component {
  render() {
    let { id, name, company } = this.props;
    return (
      <>
        <h3>Name : {name}</h3>
        <h3>Id : {id}</h3>
        <h3>Company : {company}</h3>
      </>
    );
  }
}

export default Child;
Child.defaultProps = {
  name: "NA",
  id: "NA",
  company: "NA",
};
*/

//~ third way by using static defaultProps property
/*
import React, { Component } from "react";

class Child extends Component {
  static defaultProps = {
    name: "NA",
    id: "NA",
    company: "NA",
  };
  render() {
    let { id, name, company } = this.props;

    return (
      <>
        <h3>Name : {name}</h3>
        <h3>Id : {id}</h3>
        <h3>Company : {company}</h3>
      </>
    );
  }
}

export default Child;
*/

//! how to accept childeren from parent component

//! prop-types
/*
import React from "react";
import PropTypes from "prop-types";

function Child({ id, name, company }) {
  return (
    <>
      <h2>Name : {name}</h2>
      <h2>Id : {id}</h2>
      <h2>Company : {company}</h2>
    </>
  );
}

Child.PropTypes = {
  name: PropTypes.string, //~ it should show warning in console if types are not matching
  id: PropTypes.number,
  company: PropTypes.string,
};
export default Child;
*/

//^ component lifecycle in class component

import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("child constructor");
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("child rendered");

    return (
      <>
        <h2>Count:{this.state.count}</h2>
      </>
    );
  }
  static getDerivedStateFromProps(prop, state) {
    console.log(prop);
    console.log(state);
    console.log("static getDerivedStateFromProps");

    return prop;
  }
  componentDidMount() {
    console.log("child componentDidMount method");
  }
}

export default Child;
