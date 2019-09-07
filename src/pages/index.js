import React from "react"
import { Router } from "@reach/router"
import Homepage from "./Homepage"
import Header from "../components/header"
import Login from "./Login"
import "./index.css"
import Dashboard from "./Dashboard";
import Addcar from "./Addcar"

const IndexPage = () => (

  <>
    <Router>
      <Login path="/"></Login>
      <Dashboard path="/Dashboard"></Dashboard>
      <Addcar path='/Addcar'></Addcar>
    </Router>
  </>

)

export default IndexPage
