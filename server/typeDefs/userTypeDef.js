import { gql } from "apollo-server-express"

const UserTypeDef = gql`
  type Query {
    users: String
  }

  type Mutation {
    createUser(name: String): String
  }
`

export default UserTypeDef