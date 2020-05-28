/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

class DemoFooter extends React.Component {


   
  render() {

// const [isOpen, setIsOpen] = useState(false);

// const toggle = () => setIsOpen(!isOpen);

    return (
      <>
        {/* <footer className="footer"> */}
          <div id="footer-thin">
      <Container>
      <Navbar color="transparent" light expand="md">
        <NavbarBrand href="/">DeFi Gravity</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar id="thin">
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <p id="copyright">Copyright DeFi Gravity</p>
        </Collapse>
      </Navbar>
      </Container>
    </div>
            {/* <Row>
              <Col md="3">
                <h1 className="title">BLK• React</h1>
              </Col>
              <Col md="3" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/landing-page" tag={Link}>
                      Landing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/register-page" tag={Link}>
                      Register
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/profile-page" tag={Link}>
                      Profile
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="3" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink
                      href="https://creative-tim.com/contact-us?ref=blkdspr-footer"
                      target="_blank"
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://creative-tim.com/about-us?ref=blkdspr-footer"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://creative-tim.com/blog?ref=blkdspr-footer"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://opensource.org/licenses/MIT?ref=blkdspr-footer"
                      target="_blank"
                    >
                      License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="3">
                <h3 className="title">Follow us:</h3>
                <div className="btn-wrapper profile text-left">
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://twitter.com/creativetim"
                    id="tooltip39661217"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip39661217">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip206037619"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip206037619">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://dribbble.com/creativetim"
                    id="tooltip750293512"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip750293512">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
            </Row>  */}
  
        {/* </footer> */}
      </>
    );
  }
}

export default DemoFooter;
