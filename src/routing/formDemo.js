import React, { useState } from "react";

export default function FormDemo() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("values are ", username, pwd);
  };

  return (
    <div>
      This is FormDemo Component
      <form onSubmit={(e) => submit(e)}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
