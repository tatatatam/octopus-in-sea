"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../components/input";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const handleSetUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const signIn = () => {
    axios.post("https://localhost:3000/auth/login", { username: username });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-green-500 w-full h-screen  flex justify-center items-center block-1 order-2 sm:order-1">
        <div>
          <h1>Sign In</h1>
          <Input
            type="text"
            className="w-50 mt-4"
            value={username}
            onChange={handleSetUsername}
            placeholder="Username"
          />
          <div className="mt-4">
            <button className="bg-green-400" onClick={signIn}>
              Sign In
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
