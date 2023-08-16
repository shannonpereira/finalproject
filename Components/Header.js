import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-nav nav-fill w-100 justify-content-between mx-auto" bg="primary" data-bs-theme="dark">
      <Container>
       <Link to="/" className="navbar-brand">Health-Care</Link>
        {/* <Navbar.Brand href="#home">Health-Care</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        <ul className="navbar-nav me-auto" >
          <li className="nav-item">
              <Link to="/" className="nav-link ">Home</Link>
          </li>
          <li className="nav-item mx-3">
              <Link to="/findAdoctor" className="nav-link">Find a Doctor</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/task" className="nav-link">Tasks</Link>
          </li>
          <li className="nav-item mx-3">
              <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
      
          <li className="nav-item ">
            <NavDropdown title="Conditions" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="/migraine">Migraine</NavDropdown.Item>
              <NavDropdown.Item href="/allergy">Allergies </NavDropdown.Item>
              <NavDropdown.Item href="/fever">Fever</NavDropdown.Item>
              <NavDropdown.Item href="/hiv">HIV/AIDS</NavDropdown.Item>
              <NavDropdown.Item href="/cancer">Cancer </NavDropdown.Item>
            </NavDropdown>
          </li>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Diabetes
              </NavDropdown.Item> */}
          <li className="nav-item">
            <NavDropdown title="Drugs & Supplements" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="#action/3.1">Drugs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Supplements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pill Identifier</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Interaction Checker</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item">
            <NavDropdown title="Well-being" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="teenhealth">Teen Health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Children's health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diet & Weight Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pregnancy</NavDropdown.Item>
            </NavDropdown>
          </li>
                {/* <Nav.Link href="#findadoctor" className="mx-3">Find a Doctor</Nav.Link>
            <Nav.Link href="#task" className="mx-3">Tasks</Nav.Link> */}
             
        </ul>
            <Link className="btn btn-primary mx-3" to="/login">Login</Link>
            <Link className="btn btn-primary mx-1"  to="/signup">Sign up</Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;