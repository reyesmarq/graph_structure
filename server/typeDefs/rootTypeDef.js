import { gql } from "apollo-server-express"

const RootTypeDef = gql`
  type Query {
    appVersion: String
  }

  type Mutation {
    type: String
  }
`

export default RootTypeDef