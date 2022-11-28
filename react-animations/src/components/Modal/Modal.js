import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  //   const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  //   const cssClasses = [
  //     "Modal",
  //     props.show === "entering"
  //       ? "ModalOpen"
  //       : props.show === "exiting"
  //       ? "ModalClosed"
  //       : null,
  //   ];

  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  return (
    <CSSTransition
      classNames={{
        enterActive: "ModalOpen",
        exitActive: "ModalClosed",
      }}
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      onEnter={() => console.log("onEnter")}
      onEntering={() => console.log("onEntering")}
      onEntered={() => console.log("onEntered")}
      onExit={() => console.log("onExit")}
      onExiting={() => console.log("onExiting")}
      onExited={() => console.log("onExited")}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
