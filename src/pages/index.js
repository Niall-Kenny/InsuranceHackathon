import React from "react"
import { Router } from "@reach/router"
import Homepage from "./Homepage"
import Header from "../components/header"
import Login from "./Login"

import "./index.css"

const IndexPage = () => (
  <>
    <Router>
      <Login path="/"></Login>
    </Router>
  </>
)

export default IndexPage
