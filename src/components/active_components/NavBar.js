import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import equipo from '../../assets/image/equipo.png'
import '../../assets/stylesheets/active_components/NavBar.css';

import firebaseApp from '../../Firebase/firebase';
import { getAuth, signOut } from "firebase/auth";

function NavBar() {

    const auth = getAuth(firebaseApp);
    /* Falta que usar context o redux-toolkit para traer el estado de usuario logeado 
    y poder hacerle un render condicional a los componentes */

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Link to="/">
                            <Navbar.Brand href="#">
                                <img src={equipo} alt="" className='logo' />
                                <span>SF Match Maker</span>
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Actions
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link className='route' to='/'>Home</Link>
                                    <Link className='route' to="/login">Login</Link>
                                    <Link className='route' to="register">Register</Link>
                                    <button onClick={() => signOut(auth)}>Log out</button>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;
