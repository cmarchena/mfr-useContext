import { useContext, useState } from "react";
// App is a context consumer
import "./App.css";
import { UserContext } from "./context";
function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Consumer</h1>
      <p>User name: {user.name}</p>
      <p>User email: {user.email}</p>
    </>
  );
}

export default App;
