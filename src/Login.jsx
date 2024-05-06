import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    login({
      email,
      name: username || "user",
    });
    setEmail("");
    setPassword("");
    navigate("/profile");
  };
  return (
    <form onSubmit={handleLogin}>
      {/* label and input for username */}
      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={handleUsername}
      />

      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmail}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePassword}
      />
      <button type="submit">Login</button>
    </form>
  );
}
