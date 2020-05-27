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
import React from "react";
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
  UncontrolledTooltip
} from "reactstrap";

class DemoFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="6">
                <h1 className="title">DeFi Gravity</h1>
              </Col>
              <Col md="6" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  
                </Nav>
              </Col>
              <Col md="6" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  
                </Nav>
              </Col>
              <Col md="6" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  
                </Nav>
              </Col>
              <Col md="6" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink
                      href="https://creative-tim.com/contact-us?ref=blkdspr-footer"
                      target="_blank"
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row> 
  
          </Container>
        </footer>
      </>
    );
  }
}

export default DemoFooter;
