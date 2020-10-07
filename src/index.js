import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-boost"

import App from "./App"
import { typeDefs, resolvers } from "./resolvers"

const httpLink = createHttpLink({ uri: "http://localhost:5000/raduga-firebase/us-central1/graphql" })
const cache = new InMemoryCache()
const client = new ApolloClient({ link: httpLink, cache, typeDefs, resolvers })

// cache.writeData({
//   data: {}
// })

// client
//   .query({
//     query: gql`
//       {
//         subjects {
//           name
//           program {
//             name
//           }
//         }
//       }
//     `
//   })
//   .then(res => console.log(res))

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
)
