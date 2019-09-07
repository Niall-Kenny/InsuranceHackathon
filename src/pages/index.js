import React from "react"
import { Router } from "@reach/router"
import Homepage from "./Homepage"
import Header from "../components/header"
import Login from "./Login"
import "./index.css"
import Dashboard from "./Dashboard";

const IndexPage = () => (

  <>
    <Router>
      <Login path="/"></Login>
      <Dashboard path="/Dashboard"></Dashboard>
    </Router>
  </>

)

export default IndexPage
