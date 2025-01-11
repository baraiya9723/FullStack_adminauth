import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../contex/AuthContext";
import {logoutuser } from '../api'
function AppNavbar() {
    const { isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
    const navigator = useNavigate();
    const handlelogout=async()=>{
        try{
         const res = await logoutuser()
         setIsAuthenticated(false)
         navigator('/')
        }catch(err){
          console.log(err,"msg ")
        }
      }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Interactive Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      {isAuthenticated?<>
                      <Button onClick={handlelogout}>Logout</Button>
                      </> 
                      :<>
                       <Nav.Link as={Link} to="/login">Login</Nav.Link>
                       <Nav.Link as={Link} to="/register">Register</Nav.Link></>} 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
