import { queriesDef as queries } from "./queriesDef/queries";
// import { mutationsDef as mutations } from "./mutationsDef/mutations";
const { ApolloServer } = require("apollo-server");
const merge = require("lodash.merge");

import {
  typeDef as testTable,
  resolvers as testTableResolvers,
} from "./app/testTable/resolver";

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: [queries, /*mutations,*/ testTable],
  resolvers: merge(testTableResolvers),
});

server.listen(process.env.APP_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
