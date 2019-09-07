import React, { Component } from 'react';
import styles from '../components/Payments.css'
import Header from '../components/header';
import { Button } from 'react-bootstrap';

class Payments extends Component {
  state = {
    costPerMile: 0.64,
    totalBalance: 10.00,
    estimateMileLeft: 0,
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

  onClick = (e) => {
    this.setState(currentState => {
      return {totalBalance: currentState.totalBalance + 10}
    })
  }
  componentDidMount(){
    const {totalBalance, costPerMile} = this.state
    this.setState({estimateMileLeft: totalBalance/costPerMile})
  }

  componentDidUpdate (prevProps, prevState) {
    const {totalBalance, costPerMile} = this.state
      if(prevState.totalBalance !== totalBalance){
        this.setState({estimateMileLeft: totalBalance/ costPerMile})
      }
  }

    render() {
      const {costPerMile, totalBalance, estimateMileLeft} = this.state
        return (
            <div>
              <Header></Header>
                <p>Current Balance: £{totalBalance}</p>
                <p>Cost per Mile: £{costPerMile}</p>
                <p>Estimate Miles Left: {estimateMileLeft} Miles</p>
                <Button variant="primary" onClick={this.onClick}>Top up</Button>
            </div>
        );
    }
}

export default Payments;