import React from "react"
import { Route, Switch } from "react-router-dom"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import SignInSignUp from "./pages/signin-signup/signin-signup"
import HomePage from "./pages/homepage/homepage"
import { default as Schedule } from "./pages/schedule/schedule.container"
import Programs from "./pages/programs/programs"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Tuition from "./pages/tuition/tuition"
import "./_common.scss"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  logout = () => {
    auth.signOut()
    this.setState({ currentUser: null })
  }

  render() {
    console.log("currentUsert ", this.state.currentUser)
    return (
      <>
        <Header currentUser={this.state.currentUser} logout={this.logout} />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/programs" component={Programs} />
            <Route path="/signin" component={SignInSignUp} />
            <Route path="/tuition" component={Tuition} />
          </Switch>
        </main>
        <Footer />
      </>
    )
  }
}

export default App
