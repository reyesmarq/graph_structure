const fetchUsers = (root, args, context, info) => [{ name: 'Mau', age: 18 }]

const createUser = (root, {name}, context, info) => `creating ${name}. mutations with controllers`

export {
  fetchUsers,
  createUser
}