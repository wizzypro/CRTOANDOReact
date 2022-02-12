import React from "react";
import Form from "./form/Form";

let isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <Form className="form" /> : <h1>Hello</h1>}
    </div>
  );
}

export default App;
