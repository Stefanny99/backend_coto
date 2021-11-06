import { queriesDef as queries } from "./queriesDef/queries";
import { mutationsDef as mutations } from "./mutationsDef/mutations";
const { ApolloServer } = require("apollo-server");
const merge = require("lodash.merge");
import * as dotenv from "dotenv";
dotenv.config();

import {
  typeDef as testTable,
  resolvers as testTableResolvers,
} from "./app/testTable/resolver";

import {
  typeDef as usuario,
  resolvers as usuarioResolvers,
} from "./app/usuario/resolver";

import {
  typeDef as socio,
  resolvers as socioResolvers,
} from "./app/socio/resolver";

const server = new ApolloServer({
  typeDefs: [queries, mutations, testTable, usuario, socio],
  resolvers: merge(testTableResolvers, usuarioResolvers, socioResolvers),
  introspection: true,
  playground: true,
});

server.listen(process.env.APP_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
