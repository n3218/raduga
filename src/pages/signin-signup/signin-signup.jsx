import React from "react"

import SignIn from "../../components/signin/signin"
import SignUp from "../../components/signup/signup"
import "./signin-signup.scss"
import Layout from "../../components/layout/layout"

const SignInSignUp = props => {
  return (
    <Layout>
      <div className="signinsignup">
        <SignIn />
        <SignUp />
      </div>
    </Layout>
  )
}

export default SignInSignUp
