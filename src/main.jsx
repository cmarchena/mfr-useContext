import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContext } from "./context.jsx";
// This is the context provider that wraps the entire app.
// It provides the user object to the entire app.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider
      value={{
        user: {
          name: "John Doe",
          email: "johndoe@gmail.com",
        },
      }}
    >
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
