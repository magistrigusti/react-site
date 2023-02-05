export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="Logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About Us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
              </Nav>

              <Form inline>
                <FormControl 
                    type="text"
                    placeholder="Search" 
                    className="mr-sm-2"
                />

                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}