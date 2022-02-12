import React from "react";
import Input from "./Input";
import Button from "./Button";

let Form = (props) => {
  return (
    <form className={props.className}>
      <Input type="text" placeHolder="Username" />
      <Input type="password" placeHolder="Password" />
      {props.isRegistered == false && (
        <Input type="password" placeHolder="Confirm Password" />
      )}
      <Button type="submit" value={props.isRegistered ? "Login" : "Register"} />
    </form>
  );
};

export default Form;
