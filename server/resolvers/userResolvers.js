import { fetchUsers, createUser } from "../controllers/userController"

const userQueries = {
  users: (root, args, context, info) => fetchUsers(root, args, context, info)
}

const userMutations = {
  createUser: (root, args, context, info) => createUser(root, args, context, info)
}

export {
  userQueries,
  userMutations
}