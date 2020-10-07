import { gql } from "apollo-boost"

export const typeDefs = gql`
  extend type Query {
    aaaaddSubject: Subject
    uuuupdateSubject: Subject
  }

  extend type Mutation {
    UUUUpdateSubject(id: ID): Subject
  }
`

const UPDATE_SUBJECT = gql`
  {
    uuuuuupdateSubject @client
  }
`

export const resolvers = {
  Mutation: {
    seUpdateSubject: (_root, _args, { cache }, _info) => {
      const { updateSubject } = cache.readQuery({
        query: UPDATE_SUBJECT
      })

      cache.writeQuery({
        query: UPDATE_SUBJECT,
        data: { updateSubject: { ..._args } }
      })
      return updateSubject
    }
  }
}
