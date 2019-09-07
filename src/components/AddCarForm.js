import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { navigate } from '@reach/router';
import priceCalculator from "../components/utils/priceCalculator"

export default class AddCarForm extends Component {
	state = 
	{
		firstName: "",
		surname:"",
		drivingExperience: null,
		age: null,
		registrationPlate: null
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="formFirstName">
					<Form.Label>First name</Form.Label>
					<Form.Control type="text" name="firstName" placeholder="Enter First name" onChange={this.handleChange} value={this.state.firstName}/>
				</Form.Group>

				<Form.Group controlId="formSurname">
					<Form.Label>Surname</Form.Label>
					<Form.Control type="text" name="surname" placeholder="Enter Surname" onChange={this.handleChange} value={this.state.surname}/>
				</Form.Group>
				<Form.Group controlId="formAge">
					<Form.Label>Age</Form.Label>
					<Form.Control type="number" name="age" placeholder="Enter Age" onChange={this.handleChange} value={this.state.age}/>
				</Form.Group>
				<Form.Group controlId="formDrivingExperience">
					<Form.Label>Driving Experience</Form.Label>
					<Form.Control type="number" name="drivingExperience" placeholder="Enter Years Experience" onChange={this.handleChange} value={this.state.drivingExperience}/>
				</Form.Group>
				<Form.Group controlId="formRegistrationPlate">
					<Form.Label>Registration Plate</Form.Label>
					<Form.Control type="text" name="registrationPlate" placeholder="Enter Registration Plate" onChange={this.handleChange} value={this.state.registrationPlate}/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}

	handleChange = ({ target: { name, value } }) => {
		this.setState({ [name]:value})
	  }

	  handleSubmit = e => {
		e.preventDefault();
		const {age, drivingExperience} = this.state
		const insuranceCost = priceCalculator(drivingExperience, age)
		navigate('/Dashboard', {state: { insuranceCost }})

	  };
}
