import React from "react"
import { Redirect } from "react-router-dom"

import CustomInput from "../custominput/custominput"
import CustomButton from "../custombutton/custombutton"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      redirect: ""
    }
  }
  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "", redirect: "/" })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSignInWithGoogle = e => {
    e.preventDefault()
    signInWithGoogle()
    this.setState({ redirect: "/" })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <p className="comment color-darkest">Sign in with your email and password</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <CustomInput label="email" handleChange={this.handleChange} name="email" type="email" value={this.state.email} required />
          <CustomInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password} required />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={this.handleSignInWithGoogle}>Sign In With Google</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
