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
//import { logo } from "../../assets/img/blockfestsvg.png"
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class BVNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        //navbarColor: "bg-info"
        navbarColor: "navbar-transparent"

      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <img
              src={require("assets/img/DefiLogoGray.png")}
              width="184"
              height="56"
              className="d-inline-block align-middle"
              //alt="React Bootstrap logo"
              />
                 <span id="logo-text"></span>
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Designed & Developed by BlockVisors
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      BLK• <span>PRO React</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
            
        
              <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-book-bookmark"
                    />
                    <p>XDEFI</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem to="/about-us" tag={Link}>
                      <i className="tim-icons icon-bulb-63" />
                      About
                    </DropdownItem>
                    <DropdownItem to="/blog-post" tag={Link}>
                      <i className="tim-icons icon-align-center" />
                      Buy Token
                    </DropdownItem>
                    <DropdownItem to="/blog-posts" tag={Link}>
                      <i className="tim-icons icon-chart-bar-32" />
                      Exchanges
                    </DropdownItem>
                    
                   
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        color="default"
                        className="dropdown-item"
                        tag="a"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-book-bookmark"
                        />
                        Donate
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/account-settings" tag={Link}>
                          <i className="tim-icons icon-lock-circle" />
                          Account Settings
                        </DropdownItem>
                        <DropdownItem to="/login-page" tag={Link}>
                          <i className="tim-icons icon-tablet-2" />
                          Login Page
                        </DropdownItem>
                        <DropdownItem to="/register-page" tag={Link}>
                          <i className="tim-icons icon-laptop" />
                          Register Page
                        </DropdownItem>
                        <DropdownItem to="/reset-page" tag={Link}>
                          <i className="tim-icons icon-molecule-40" />
                          Reset Page
                        </DropdownItem>
                        <DropdownItem to="/invoice-page" tag={Link}>
                          <i className="tim-icons icon-notes" />
                          Invoice Page
                        </DropdownItem>
                        <DropdownItem to="/checkout-page" tag={Link}>
                          <i className="tim-icons icon-basket-simple" />
                          Checkout Page
                        </DropdownItem>
                        <DropdownItem to="/chat-page" tag={Link}>
                          <i className="tim-icons icon-email-85" />
                          Chat Page
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
        
           
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-book-bookmark"
                    />
                    <p>Challenges</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem to="/about-us" tag={Link}>
                      <i className="tim-icons icon-bulb-63" />
                      About-us
                    </DropdownItem>
                    <DropdownItem to="/blog-post" tag={Link}>
                      <i className="tim-icons icon-align-center" />
                      Team
                    </DropdownItem>
                    <DropdownItem to="/blog-posts" tag={Link}>
                      <i className="tim-icons icon-chart-bar-32" />
                      Careers
                    </DropdownItem>
                    <DropdownItem to="/contact-us" tag={Link}>
                      <i className="tim-icons icon-square-pin" />
                      Contact Us
                    </DropdownItem>
                    <DropdownItem to="/pricing" tag={Link}>
                      <i className="tim-icons icon-coins" />
                      Pricing
                    </DropdownItem>
                    <DropdownItem to="/ecommerce" tag={Link}>
                      <i className="tim-icons icon-basket-simple" />
                      Portfolio
                    </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      <i className="tim-icons icon-lock-circle" />
                      Papers
                      </DropdownItem>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        color="default"
                        className="dropdown-item"
                        tag="a"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-book-bookmark"
                        />
                        Sponsor
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/account-settings" tag={Link}>
                          <i className="tim-icons icon-lock-circle" />
                          Account Settings
                        </DropdownItem>
                        <DropdownItem to="/login-page" tag={Link}>
                          <i className="tim-icons icon-tablet-2" />
                          Login Page
                        </DropdownItem>
                        <DropdownItem to="/register-page" tag={Link}>
                          <i className="tim-icons icon-laptop" />
                          Register Page
                        </DropdownItem>
                        <DropdownItem to="/reset-page" tag={Link}>
                          <i className="tim-icons icon-molecule-40" />
                          Reset Page
                        </DropdownItem>
                        <DropdownItem to="/invoice-page" tag={Link}>
                          <i className="tim-icons icon-notes" />
                          Invoice Page
                        </DropdownItem>
                        <DropdownItem to="/checkout-page" tag={Link}>
                          <i className="tim-icons icon-basket-simple" />
                          Checkout Page
                        </DropdownItem>
                        <DropdownItem to="/chat-page" tag={Link}>
                          <i className="tim-icons icon-email-85" />
                          Chat Page
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                <NavLink href="https://medium.com/blockfest-group">
                  Sponsor
                </NavLink>
              </NavItem>
                <NavItem>
                  <Button
                    className="nav-link"
                    color="primary"
                    href="https://www.defigravity.org"
                    size="md"
                    target="_blank"
                  >
                    <p>Change Wallet</p>
                  </Button>
                </NavItem>
                {/* <NavItem>
                  <Button
                    className="nav-link"
                    color="default"
                    href="https://www.creative-tim.com/product/blk-design-system-pro-react?reaf=blkdspr-pages-navbar"
                    size="sm"
                    target="_blank"
                  >
                    <p>Partner</p>
                  </Button>
                </NavItem> */}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default BVNavbar;
