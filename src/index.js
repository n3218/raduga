import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient, gql } from "apollo-boost"
import App from "./App"

const httpLink = createHttpLink({ uri: "https://raduga.com" })
const cache = new InMemoryCache()
const client = new ApolloClient({ link: httpLink, cache })

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
)
