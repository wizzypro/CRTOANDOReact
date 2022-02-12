import React from "react";
import Form from "./form/Form";

let isLoggedIn = true;

function App() {
  return (
    <div className="container">
      <Form className="form" isRegistered={isLoggedIn} />
    </div>
  );
}

export default App;
