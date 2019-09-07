import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Header from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/Vehicles.css'
import Image from 'react-bootstrap/Image'

class Dashboard extends Component {
    state = {
        userData:{
            licensePlate : "mt09nks",
            name: "alan browns",
            age : 33
        },
        vehicleData: {
            "vin": "WVGZZZ5NZAW007903",
            "make": "Vauxhall",
            "model": "Vectra",
            "cylinderCapacity": "1968cc",
            "numberOfDoors": "5",
            "sixMonthRate": "112.75",
            "twelveMonthRate": "205.00",
            "dateOfFirstRegistration": "23 July 2009",
            "yearOfManufacture": "2009",
            "co2Emissions": "167 g/km",
            "fuelType": "Diesel (other values Petrol/Electric)",
            "taxStatus": "Not taxed",
            "transmission": "Manual (other values automatic / cvt)",
            "colour": "Silver",
            "typeApproval": "M1",
            "wheelPlan": "2 AXLE RIGID BODY",
            "revenueWeight": "3850kg",
            "taxDetails": "Tax due: 06 February 2015",
            "motDetails": "Expires: 23 July 2015",
            "taxed": false,
            "mot": false,
            "avatar_url": "https://autovolostorage.blob.core.windows.net/advertimages-7338748/vauxhall-vectra-2009-069l.jpg"
           }
    }
    render() {
        const {userData, vehicleData} = this.state 
        return (
            <div>
                <Header>Vehicles</Header>
                <DropdownButton id="dropdown-basic-button" title={`Vehicle License Plate: ${userData.licensePlate}`}>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <section>
                    <Image src={`${vehicleData.avatar_url}`} fluid />
                </section>
                <ul>
                    <li><b>Car Details:</b></li>
                    <li>Vehcile Maker: {vehicleData.make}</li>
                    <li>Vehicle Model: {vehicleData.model}</li>
                    <li>Number of Doors: {vehicleData.numberOfDoors}</li>
                    <li>co2 Emission: {vehicleData.co2Emissions}</li>
                    <li>Fuel type: {vehicleData.fuelType}</li>
                    <li>Car Colour: {vehicleData.colour}</li>
                </ul>
                <Button variant="primary" id="paymentsBtn" href="/">Payments</Button>
            </div>
        );
    }
}

export default Dashboard;