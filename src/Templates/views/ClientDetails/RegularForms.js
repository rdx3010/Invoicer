import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function RegularForms() {
  return (
    <>
      <Container fluid>
        <Row>
          {/* <Col md="6">
            <Card className="stacked-form">
              <Card.Header>
                <Card.Title as="h4">Customer Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form action="#" method="#">
                  <Form.Group>
                    <label>Name</label>
                    <Form.Control
                      placeholder="Enter Name"
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <label>Address</label>
                    <Form.Control
                      placeholder="Password"
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Check>
                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Subscribe to newsletter
                      </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Button className="btn-fill" type="submit" variant="info">
                  Submit
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card className="horizontal-form">
              <Card.Header>
                <Card.Title as="h4">Horizontal Form</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form className="form-horizontal">
                  <Form.Group>
                    <Row>
                      <Col className="control-label" md="3">
                        Email
                      </Col>
                      <Col md="9">
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Row>
                      <Col className="control-label" md="3">
                        Password
                      </Col>
                      <Col md="9">
                        <Form.Control
                          placeholder="Password"
                          type="password"
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Row>
                      <Col md="3"></Col>
                      <Col md="9">
                        <Form.Check>
                          <Form.Check.Label>
                            <Form.Check.Input
                              defaultValue=""
                              type="checkbox"
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                            Remember me
                          </Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Col md="9">
                  <Button className="btn-fill" type="submit" variant="info">
                    Sign in
                  </Button>
                </Col>
              </Card.Footer>
            </Card>
          </Col> */}
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Customer Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form action="/" className="form-horizontal" method="get">
                  <Row>
                    <Col >
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="first_name" placeholder="ex: Mike" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="last_name"
                          placeholder="ex: Andrew"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <fieldset>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Address1</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Address2</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Col>
                    </Row>

                  </fieldset>
                  <fieldset>
                    <Row>
                      <Col >
                        <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" name="city" placeholder="city" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            name="state"
                            placeholder=""
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </fieldset>
                  <fieldset>
                    <Row>
                      <Col >
                        <Form.Group>
                          <Form.Label>Country</Form.Label>
                          <Form.Control type="text" name="country" placeholder="country" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </fieldset>
                  <fieldset>
                    <Row>
                      <Col >
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" placeholder="email" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>Phone No.</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            placeholder="phone"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </fieldset>
                  <fieldset>
                    <Form.Group>
                      <Row>
                        <Col sm="10">
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                              Similar as above address
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                    </Form.Group>
                  </fieldset>
                  <Card.Header>
                    <Card.Title as="h4" className="m-0 mb-1 p-0">Crossponding Address</Card.Title>
                  </Card.Header>
                  <fieldset>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Address1</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Address2</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Col>
                    </Row>

                  </fieldset>
                  {/* <fieldset>
                    <Form.Group>
                      <Row>
                        <Col className="control-label" sm="2">
                          Static control
                        </Col>
                        <Col sm="10">
                          <Form.Control
                            plaintext
                            tag="p"
                            defaultValue="info@csharptek.com"
                            className="mt-1"
                          ></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>
                  </fieldset> */}
                  {/* <fieldset> */}
                  {/* <Form.Group> */}
                   
                        {/* <fieldset>
                            <Row>
                              <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                  <Form.Label>Address1</Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                  <Form.Label>Address2</Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                              </Col>
                            </Row>

                          {/* </fieldset> */}
                        {/* <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                              Second Checkbox
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check-radio">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue="option1"
                                id="exampleRadios11"
                                name="exampleRadio"
                                type="radio"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                              Radio is off
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check-radio">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue="option2"
                                id="exampleRadios12"
                                name="exampleRadio"
                                type="radio"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                              Radio is on
                            </Form.Check.Label>
                          </Form.Check> */}
                      
                  {/* </Form.Group> */}
                  {/* </fieldset> */}
                  <fieldset>
                    <Form.Group>
                      <Row>
                        <Col className="control-label mt-3" sm="2">
                          custom checkbox
                        </Col>
                        <Col sm="10">
                          <Form.Check className="checkbox-inline">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue="option1"
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign "></span>
                            </Form.Check.Label>
                          </Form.Check>
                          {/* <Form.Check className="checkbox-inline">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue="option2"
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>b
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="checkbox-inline">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue="option3"
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>c
                            </Form.Check.Label>
                          </Form.Check> */}
                        </Col>
                      </Row>
                    </Form.Group>
                  </fieldset>
                </Form>
              </Card.Body>
              <Card.Footer>
                <Col md="9">
                  <Button className="btn-fill" type="submit" variant="info">
                    Submit
                  </Button>
                </Col>
              </Card.Footer>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Input Variants</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form action="/" className="form-horizontal" method="get">
                  <Row>
                    <Col className="control-label" sm="2">
                      Custom Checkboxes &amp; radios
                    </Col>
                    <Col
                      className="checkbox-radios"
                      sm={{ span: 4, offset: 1 }}
                    >
                      <Form.Check>
                        <Form.Check.Label>
                          <Form.Check.Input type="checkbox"></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Unchecked
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check>
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultChecked
                            type="checkbox"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Checked
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check disabled>
                        <Form.Check.Label>
                          <Form.Check.Input
                            disabled
                            type="checkbox"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Disabled Unchecked
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check disabled>
                        <Form.Check.Label>
                          <Form.Check.Input
                            disabled
                            type="checkbox"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Disabled Checked
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                    <Col className="checkbox-radios" sm="5">
                      <Form.Check className="form-check-radio">
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultValue="option1"
                            id="exampleRadios21"
                            name="exampleRadio"
                            type="radio"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Radio is off
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check className="form-check-radio">
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultChecked
                            defaultValue="option2"
                            id="exampleRadios22"
                            name="exampleRadio"
                            type="radio"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Radio is on
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check className="form-check-radio" disabled>
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultValue="option1"
                            disabled
                            id="exampleRadios31"
                            name="exampleRadio1"
                            type="radio"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Radio disabled is off
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check className="form-check-radio" disabled>
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultChecked
                            defaultValue="option2"
                            disabled
                            id="exampleRadios32"
                            name="exampleRadio1"
                            type="radio"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Radio disabled is on
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="control-label" sm="2">
                      Input with success
                    </Col>
                    <Col sm="10">
                      <Form.Group className="has-success">
                        <Form.Control
                          defaultValue="Success"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="control-label" sm="2">
                      Input with error
                    </Col>
                    <Col sm="10">
                      <Form.Group className="has-error">
                        <Form.Control
                          defaultValue="Error"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="control-label" sm="2">
                      Column sizing
                    </Col>
                    <Col sm="10">
                      <Row>
                        <Col md="3">
                          <Form.Group>
                            <Form.Control
                              placeholder=".col-md-3"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md="4">
                          <Form.Group>
                            <Form.Control
                              placeholder=".col-md-4"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md="5">
                          <Form.Group>
                            <Form.Control
                              placeholder=".col-md-5"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default RegularForms;
