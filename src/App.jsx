import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";
import { AuthContext } from "./context";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function login(user) {
    setUser(user);
    setIsLoggedIn(true);
  }
  function logout() {
    setUser(null);
    setIsLoggedIn(false);
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      <Router>
        <Navigation logout={logout} user={user} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="login" element={<Login user={user} login={login} />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile user={user} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
