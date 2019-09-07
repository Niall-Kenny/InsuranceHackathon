import React, { Component } from "react"
import { Button, FormGroup, FormControl } from "react-bootstrap"
import { navigate } from "@reach/router"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = ({ target: { type, value } }) => {
    this.setState({
      [type]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    navigate("/dashboard")
    this.setState({
      email: "",
      password: "",
    })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            {/* <ControlLabel>Email</ControlLabel> */}
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            {/* <ControlLabel>Password</ControlLabel> */}
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" type="submit">
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default Login
