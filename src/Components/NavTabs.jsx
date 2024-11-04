import { Link, useLocation} from 'react-router-dom';
import { Navbar, Nav, /*NavDropdown, Container*/ } from 'react-bootstrap';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
    const currentPage = useLocation().pathname;

    return (

        <Navbar expand="sm" bg="primary" variant="dark" className="sticky-top mb-3 navbar">
            {/* Logo */}
            <Navbar.Brand>PotatoDoge1</Navbar.Brand>

            {/* Hamburger Icon for Mobile */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Menu Links */}
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ms-auto">
                    <Link to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}  // This is a conditional (ternary) operator that checks to see if the current page is "Home". If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'. It conditionally highlights the link if we are on the page.
                    >About Me</Link>
                    <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}> Portfolio </Link> 
                    <Link to="/Contact" className={currentPage === '/AboutPage' ? 'nav-link active' : 'nav-link'}> Contact </Link>
                    <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}> Resume </Link>

                    {/*<Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    */}
                    
                    {/* Optional Dropdown
                    <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                    </NavDropdown> */}

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default NavTabs;