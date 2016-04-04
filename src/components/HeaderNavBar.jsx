var React = require( 'react' );
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

var HeaderNavBar = React.createClass( {
    render: function() {
      return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Carolina Belts</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Bullhide 1-1/4 Belts</MenuItem>
                <MenuItem eventKey={3.2}>Bullhide 1-1/2 Belts</MenuItem>
                <MenuItem eventKey={3.3}>Bullhide 1-3/4 Belts</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.1}>Horsehide Belts</MenuItem>
                <MenuItem eventKey={4.2}>Elephant Belts</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="#">Sizing a Belt</NavItem>
              <NavItem eventKey={2} href="#">Customer Service</NavItem>
              <NavItem eventKey={2} href="#">Contact Us</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">View Cart</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
} );

module.exports = HeaderNavBar;
