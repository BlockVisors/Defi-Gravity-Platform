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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="blogs">
      
          {/* ********* BLOGS 2 ********* */}
          <div className="section blogs-2" id="blogs-2">
            <Container fluid >
              <hr className="line-info"/>;
              <h2 className="title-challenges" id="inv-chal">Investor Challenges</h2>
              <br />
              <Row>
                <Col lg="3">
                  <Card 
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background" 
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/steven-roe.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Research Byte</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">AI at the Edge</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/noah-wetering.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Data Virtualization</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">
                            A Spectrum of Approaches
                          </CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/matthew-henry.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">New Challenges</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Touch on a trend</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/waranont.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Driverless Future</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Self-Driving Cars</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div>
                <Container id="under-button">
                <Row>
                  <Col md="3">
                  <Button
                    className="nav-link"
                    color="primary"
                    href="https://www.defigravity.org"
                    size="md"
                    target="_blank"
                  >
                    <p>Create Challenge</p>
                  </Button>
                  </Col>
                  </Row>
                  </Container>
              
              </div>
            </Container>
          </div>
          {/* ********* END BLOGS 2 ********* */}
        
        
          {/* ********* BLOGS 2 ********* */}
          <div className="section blogs-2" id="blogs-2">
            <Container fluid >
              <hr className="line-info"/>;
              <h2 className="title-challenges" id="inv-chal">Developer Challenges</h2>
              <br />
              <Row>
                <Col lg="3">
                  <Card 
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background" 
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/steven-roe.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Research Byte</h6>
                        <a href="/pricing" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">AI at the Edge</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/noah-wetering.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Data Virtualization</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">
                            A Spectrum of Approaches
                          </CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/matthew-henry.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">New Challenges</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Touch on a trend</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/waranont.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Driverless Future</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Self-Driving Cars</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div>
                <Container id="under-button">
                <Row>
                  <Col md="3">
                  <Button
                    className="nav-link"
                    color="primary"
                    href="https://www.defigravity.org"
                    size="md"
                    target="_blank"
                  >
                    <p>Create Challenge</p>
                  </Button>
                  </Col>
                  </Row>
                  </Container>
              
              </div>
            </Container>
          </div>
          {/* ********* END BLOGS 2 ********* */}
        
                    
          {/* ********* BLOGS 7 ********* */}
          {/* <div className="blogs-7">
            <Container>
              <hr className="line-info"/>
              <h2 className="inv-challenges" id="dev-chal">Developer Challenges</h2>
              <Row>
                <Col md="7">
                  <Card className="card-blog card-background">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/sendra-martorell.jpg") +
                          ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-center">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h2">
                            GigaOm Market Landscape
                          </CardTitle>
                        </a>
                        <h3 className="card-category">Enterprise Report</h3>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/johana.jpg")}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="5">
                  <Card className="card-blog card-background">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/randy-colas.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-center">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h2">
                            Development is Not Enough
                          </CardTitle>
                        </a>
                        <h3 className="card-category">Best Practices</h3>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/p10.jpg")}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md="5">
                  <Card className="card-blog card-background">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/marc-olivier-jodoin.jpg") +
                          ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-center">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h2">Improve Cyber Security</CardTitle>
                        </a>
                        <h3 className="card-category">On Demand</h3>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/julie.jpg")}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="7">
                  <Card className="card-blog card-background">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/waranont.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-center">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h2">
                            How Blockchain Changes Everything
                          </CardTitle>
                        </a>
                        <h3 className="card-category">On Market</h3>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/christian.jpg")}
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <div>
                <Container id="under-button">
                <Row>
                  <Col md="4">
                  <Button
                    className="nav-link"
                    color="primary"
                    href="https://www.defigravity.org"
                    size="md"
                    target="_blank"
                  >
                    <p>Create Developer Challenge</p>
                  </Button>
                  </Col>
                  </Row>
                  </Container>
              </div>
            </Container>
            <Container>
            <Row>
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <h3 className="title">Interested in Listing Your Project or Sponsoring a Challenge?</h3>
                  <h4 className="description mb-5">
                    Contact Us to developer commpany sponsored challenges and bounties targeting user acquistion or developer adoption.
                  </h4>
                  <Button color="success" size="lg">
                    Contact us
                  </Button>
                </Col>
              </Row>
            </Container>
          </div> */}
          {/* ********* END BLOGS 7 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Blogs;
