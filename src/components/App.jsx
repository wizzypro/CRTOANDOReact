import React from "react";
import Form from "./form/Form";

let isLoggedIn = false;

function App() {
  return (
    <div className="container">
      <Form className="form" valid={isLoggedIn} />
    </div>
  );
}

export default App;
