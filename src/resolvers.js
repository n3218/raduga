import { gql } from "apollo-boost"

export const typeDefs = gql`
  extend type Query {
    updatingSubject: Subject
  }

  extend type Mutation {
    SeUpdatingSubject(id: ID): Subject
  }
`

const UPDATING_SUBJECT = gql`
  {
    updatingSubject @client
  }
`

export const resolvers = {
  Mutation: {
    seUpdatingSubject: (_root, _args, { cache }, _info) => {
      const { updatingSubject } = cache.readQuery({
        query: UPDATING_SUBJECT
      })
      cache.writeQuery({
        query: UPDATING_SUBJECT,
        data: { updatingSubject: { ..._args } }
      })
      return updatingSubject
    }
  }
}
