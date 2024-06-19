import React, { useRef } from "react";

export default function Uncontrolled() {
  //   const [username, setUsername] = useState("");
  //   const [pwd, setPwd] = useState("");

  const usernameRef = useRef(null);
  const pwdRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    // console.log("values are ", username, pwd);
    console.log("values-", usernameRef.current.value, pwdRef.current.value);
  };

  return (
    <div>
      This is Uncontrolled Component
      <form onSubmit={(e) => submit(e)}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            ref={usernameRef}
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            ref={pwdRef}
            // value={pwd}
            // onChange={(e) => setPwd(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
