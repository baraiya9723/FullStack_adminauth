import React, { useState ,useContext } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import axios from 'axios';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contex/AuthContext";
function Login() {
    const { isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigator = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await loginUser(formData);
      
          if (response.status === 200) {
            setIsAuthenticated(true)
            alert('Admin login successful! Redirecting...');
            navigator('/')
          } else {
            // Check for specific error responses from the backend
            if (response.data && response.data.message) {
              alert(response.data.message); 
            } else {
              alert('An error occurred. Please try again later.');
            }
          }
        } catch (error) {
          console.error('Error during login:', error?.response?.data?.message); 
      
          // Check for specific Axios error messages
          if (error?.response) { 
              alert(error?.response?.data?.message); 
          } else {
            alert('An unknown error occurred.'); 
          }
        }
      };
    return (
        <Container className="my-5" style={{ minHeight: 'calc(100vh - 56px - 40px)'}}>
            <h2>Login</h2>
            {message && <Alert variant="info">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;
