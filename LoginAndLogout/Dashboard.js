import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <h4>Welcome to your Dashboard!</h4>
      <p>You are now logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
