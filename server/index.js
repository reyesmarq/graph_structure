import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

let
  app = express(),
  port = 1020,
  server = new ApolloServer({ typeDefs, resolvers })

  server.applyMiddleware({ app })

app.listen(port, () => console.log(`> Server running at http://localhost:${port}`))