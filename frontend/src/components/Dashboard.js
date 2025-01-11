import React, { useContext } from "react";
import { AuthContext } from "../contex/AuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigator = useNavigate()
  return (
    <div className="dashboard" style={{display:'flex',flexDirection:'column'}}>
      <div>
        <h1>Welcome to the Interactive Dashboard</h1>
        <p>
          Please register or log in to access your role-based features. Admins
          will have additional access, while customers can browse this page.
        </p>
      </div>
      {isAuthenticated && (
        <>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "black" }}>
                Welcome, Admin! 🎉
            </h1>
            <p style={{ fontSize: "1.2rem", color: "gray", marginTop: "10px" }}>
                You have successfully logged in. Dive into the user data and manage your system efficiently.
            </p>
            <Button
                variant="dark" 
                size="lg" 
                style={{ marginTop: "20px", fontWeight: "bold" }}
                onClick={() =>{ 
                    alert("Redirecting to user data...")
                    navigator('/admin')
                }} // Replace with actual navigation logic
            >
                View User Data
            </Button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
