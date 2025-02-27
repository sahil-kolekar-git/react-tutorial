//^ task 2:
//! using class based component
/*
import React from "react";

class Child extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.props.update("updated the message");
          }}
        >
          update the message
        </button>
      </>
    );
  }
}
export default Child;
*/
//!using function based component
/*
import React from "react";

function Child({ update }) {
  return (
    <>
      <button
        onClick={() => {
          update("message is updated");
        }}
      >
        update the message
      </button>
    </>
  );
}

export default Child;
*/

//^ task 5 :
/*
import React from "react";

const Child = (props) => {
  return (
    <>
      <input type="text" ref={props.ref}></input>
    </>
  );
};

export default Child;
*/
