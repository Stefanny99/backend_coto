import { gql } from "apollo-server";

import { eliminarPedido, registrarPedido } from "./loader";

export const typeDef = gql`
  type Pedido {
    id: ID
    fk_usuario: String
    fk_inventario: ID
    estado: String
  }

  input PedidoInput {
    id: ID
    fk_usuario: String
    fk_inventario: ID
    estado: String
  }
`;

export const resolvers = {
  Mutation: {
    registrarPedido: (_, { pedido }) => registrarPedido(pedido),
    eliminarPedido: (_, { id }) => eliminarPedido(id),
  },
};
