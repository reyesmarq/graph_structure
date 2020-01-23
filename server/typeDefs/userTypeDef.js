import { gql } from "apollo-server-express"

const UserTypeDef = gql`
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    createUser(name: String): String
  }

  type User {
    name: String
    age: Int
  }
`

export default UserTypeDef