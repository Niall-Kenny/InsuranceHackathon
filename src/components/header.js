import React from "react"
import { Link } from "@reach/router"
import "./header.css"
import Nav from 'react-bootstrap/Nav'
// import { Link } from "gatsby" 

const Header = () => (
<Nav justify variant="tabs" defaultActiveKey="/" id="mainNav">
  <Nav.Item>
    <Nav.Link href="/">Insurance Now</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>
    </Nav.Link>
  </Nav.Item>
</Nav>
)

export default Header
