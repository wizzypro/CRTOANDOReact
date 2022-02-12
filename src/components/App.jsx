import React from "react";
import Form from "./form/Form";

let isLoggedIn = true;

let validator = (isLoggedIn) => {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <Form className="form" />;
  }
};

function App() {
  return <div className="container">{validator(isLoggedIn)}</div>;
}

export default App;
