"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../components/input";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSetUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleSetPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const signIn = () => {
    axios
      .post("http://localhost:3000/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        Cookies.set("access_token", response.data.access_token); // set cookie with client lib
        window.location.href = "/blog/dashboard";
      });
  };

  const signUp = () => {
    axios
      .post("http://localhost:3000/auth/signup", {
        username: username,
        password: password,
      })
      .then((response) => {
        window.location.href = "/login";
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-green-500 w-full h-screen  flex justify-center items-center block-1 order-2 sm:order-1">
        <div className="block">
          <h1>Sign In/Sign Up</h1>
          <Input
            type="text"
            className="w-50 mt-4"
            value={username}
            onChange={handleSetUsername}
            placeholder="Username"
          />
          <div></div>
          <Input
            type="text"
            className="w-50 mt-4"
            value={password}
            onChange={handleSetPassword}
            placeholder="password"
          />
          <div className="mt-4">
            <button className="bg-green-400 mr-2" onClick={signIn}>
              Sign In
            </button>
            <button className="bg-blue-400" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-green-900 w-full sm:h-screen flex justify-center items-center xs:order-first block-2 order-1 sm:order-2 p-4">
        <img src="https://via.placeholder.com/150" alt="icon-branding" />
      </div>
    </div>
  );
}
