import React from "react";
import Input from "./Input";
import Button from "./Button";

let Form = (props) => {
  return (
    <form className={props.className}>
      <Input type="text" placeHolder="Username" />
      <Input type="password" placeHolder="Password" />
      <Button type="submit" value="Login" />
    </form>
  );
};

export default Form;
