
import './App.css';
import { Navbar, Nav, Form, FormControl, Button ,NavDropdown } from "react-bootstrap";
function App() {
  return (
    <div className="App">
 <Navbar className="nav" bg="light" expand="lg">
  <Navbar.Brand href="#home">BourseTunisie</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#link">Tunisie Valeurs</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Actualités</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Gestion Libre</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Gestion sous mandat</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<div className="form">
      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
      
    </div>
    </div>
  );
}

export default App;
