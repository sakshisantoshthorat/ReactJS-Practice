import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ justifySelf: "center" }}>
        <h3>Protected Routes</h3>
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;
          {!isLoggedIn && <Link to="/login">Login</Link>}&nbsp;&nbsp;
          {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard setIsLoggedIn={setIsLoggedIn} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
