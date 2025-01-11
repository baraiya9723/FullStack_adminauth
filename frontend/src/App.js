import React from "react";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Global styles
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import { AuthContext } from "./contex/AuthContext";
function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <AppNavbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Home/Dashboard */}
          <Route path="/register" element={<Register />} />{" "}
          {/* Registration Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
          <Route
            path="/admin"
            element={isAuthenticated ? <AdminPage /> : <Navigate to="/" />}
          />
          {/* Admin Page */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
