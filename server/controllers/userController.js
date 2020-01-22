const fetchUsers = (root, args, context, info) => 'users with tf, resolvers{query|mutations} & controllers'

const createUser = (root, {name}, context, info) => `creating ${name}. mutations with controllers`

export {
  fetchUsers,
  createUser
}