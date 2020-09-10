import React from "react"
import { Redirect } from "react-router-dom"

import CustomInput from "../custominput/custominput"
import CustomButton from "../custombutton/custombutton"
import { createUserProfileDocument, auth } from "../../firebase/firebase.utils"

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    const initialState = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      redirect: ""
    }
    this.state = initialState
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState({ displayName: "", email: "", password: "", confirmPassword: "", redirect: "/" })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="signUp">
        <h2>I do not have an account</h2>
        <p>Sign up with your email and password</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <CustomInput label="display name" handleChange={this.handleChange} name="displayName" type="text" value={this.state.displayName} required />
          <CustomInput label="email" handleChange={this.handleChange} name="email" type="email" value={this.state.email} required />
          <CustomInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required />
          <CustomInput label="confirm password" handleChange={this.handleChange} name="confirmPassword" type="password" value={this.state.confirmPassword} required />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
