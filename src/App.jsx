import { useContext } from "react";
import "./App.css";
import { UserContext } from "./context";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <p>Hello {user.name}</p>
      <p>Your email is {user.email}</p>
    </>
  );
}

export default App;
