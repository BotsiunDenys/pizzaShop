import React, { FC, useState } from "react";
import { useAppDispatch } from "../store/store";
import { login, registration } from "../store/slice/AuthSlice";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={() => dispatch(login({username, password}))}>Login</button>
      <button onClick={() => dispatch(registration({username, password}))}>Register</button>
    </div>
  );
};

export default LoginForm;
