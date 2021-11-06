import { queriesDef as queries } from "./queriesDef/queries";
import { mutationsDef as mutations } from "./mutationsDef/mutations";
const { ApolloServer } = require("apollo-server");
const merge = require("lodash.merge");
import * as dotenv from "dotenv";
dotenv.config();

import {
  typeDef as usuario,
  resolvers as usuarioResolvers,
} from "./app/usuario/resolver";

import {
  typeDef as socio,
  resolvers as socioResolvers,
} from "./app/socio/resolver";

import {
  typeDef as pedido,
  resolvers as pedidoResolvers,
} from "./app/pedido/resolver";

import {
  typeDef as inventario,
  resolvers as inventarioResolvers,
} from "./app/inventario/resolver";

const server = new ApolloServer({
  typeDefs: [queries, mutations, usuario, socio, pedido, inventario],
  resolvers: merge(
    usuarioResolvers,
    socioResolvers,
    pedidoResolvers,
    inventarioResolvers
  ),
  introspection: true,
  playground: true,
});

server.listen(process.env.APP_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
