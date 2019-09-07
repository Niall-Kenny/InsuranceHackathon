import React, { Component } from "react"
import { Router } from "@reach/router"
import Homepage from "./Homepage"
import Header from "../components/header"
import Login from "./Login"
import "./index.css"
import Dashboard from "./Dashboard";
import Addcar from "./Addcar"
import Payments from "./Payments";

class IndexPage extends Component{
//   state = {
//     userData:{
//         licensePlate : "mt09nks",
//         name: "alan browns",
//         age : 33
//     },
//     vehicleData: {
//         "vin": "WVGZZZ5NZAW007903",
//         "make": "Vauxhall",
//         "model": "Vectra",
//         "cylinderCapacity": "1968cc",
//         "numberOfDoors": "5",
//         "sixMonthRate": "112.75",
//         "twelveMonthRate": "205.00",
//         "dateOfFirstRegistration": "23 July 2009",
//         "yearOfManufacture": "2009",
//         "co2Emissions": "167 g/km",
//         "fuelType": "Diesel (other values Petrol/Electric)",
//         "taxStatus": "Not taxed",
//         "transmission": "Manual (other values automatic / cvt)",
//         "colour": "Silver",
//         "typeApproval": "M1",
//         "wheelPlan": "2 AXLE RIGID BODY",
//         "revenueWeight": "3850kg",
//         "taxDetails": "Tax due: 06 February 2015",
//         "motDetails": "Expires: 23 July 2015",
//         "taxed": false,
//         "mot": false,
//         "avatar_url": "https://autovolostorage.blob.core.windows.net/advertimages-7338748/vauxhall-vectra-2009-069l.jpg"
//        }
// }


render() {
  // const {userData, vehicleData} = this.state
  return(
    <>
    <Router>
      <Login path="/"></Login>
      <Dashboard path="/Dashboard"></Dashboard>
      <Addcar path='/Addcar'></Addcar>
      <Payments path="/Payments"></Payments>
    </Router>
    </>
  )
  }
}

export default IndexPage
