import React, { Component } from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

export default class extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    dietaryRestrictions: {
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target
    type === "checkbox"
      ? this.setState(prevState => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked
            }
          }
        })
      : this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("Submit")
  }
  render = () => {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
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
          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination"
          >
            <option value="">Please choose a destination</option>
            <option value="bangkok">Bangkok</option>
            <option value="tokyo">Tokyo</option>
            <option value="san francisco">San Francisco</option>
            <option value="singapore">Singapore</option>
            <option value="yangon">Yangon</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange}
            />
            Vegan?
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              onChange={this.handleChange}
            />
            Kosher?
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age /* Age here */}</p>
        <p>Your gender: {this.state.gender /* Gender here */}</p>
        <p>Your destination: {this.state.destination /* Destination here */}</p>
        <p>
          Your dietary restrictions:
          <br />
          Vegan: {this.state.dietaryRestrictions.isVegan ? " Yes" : " No"}
          <br />
          Kosher: {this.state.dietaryRestrictions.isKosher ? " Yes" : " No"}
          <br />
          Lactose Free:{" "}
          {this.state.dietaryRestrictions.isLactoseFree ? " Yes" : " No"}
        </p>
      </main>
    )
  }
}
