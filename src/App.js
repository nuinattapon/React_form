import React, { Component } from "react"
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

export default class extends Component {
  state = {
    firstName: "",
    lastName: "",
    isFriendly: true,
    gender: "",
    favColor: "blue"
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  handleSubmit = event => {
    console.log("Submit")
  }

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <textarea value={"Some default value"} onChange={this.handleChange} />
          <br />
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly?
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <label>Favorite Color:</label>
          <select
            value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
        <h3>
          {this.state.firstName} {this.state.lastName}
        </h3>
        <h3>You are a {this.state.gender}</h3>
        <h3>Your favorite color is {this.state.favColor}</h3>
      </div>
    )
  }
}
