import LoginForm, { LoginFormProps } from "@/components/auth/LoginForm";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameOnChange: LoginFormProps["usernameOnChange"] = (e) => {
    setUsername(e.target.value);
  };
  const passwordOnChange: LoginFormProps["passwordOnChange"] = (e) => {
    setPassword(e.target.value);
  };
  const loginOnSubmit: LoginFormProps["loginOnSubmit"] = (e) => {
    e.preventDefault();
    console.log({ name: username, password: password });
  };
  return (
    <LoginForm
      username={username}
      password={password}
      usernameOnChange={usernameOnChange}
      passwordOnChange={passwordOnChange}
      loginOnSubmit={loginOnSubmit}
    />
  );
}
