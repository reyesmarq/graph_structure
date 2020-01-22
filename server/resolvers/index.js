import { userQueries, userMutations } from "./userResolvers"

const resolvers = {
  Query: {
    ...userQueries
  },

  Mutation: {
    ...userMutations
  }
}

export default resolvers