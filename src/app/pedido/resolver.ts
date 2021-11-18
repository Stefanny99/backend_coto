import { gql } from "apollo-server";
import { obtenerInventarioPorId } from "../inventario/loader";

import { eliminarPedido, registrarPedido } from "./loader";

export const typeDef = gql`
  type Pedido {
    id: ID
    fk_usuario: String
    fk_inventario: ID
    cantidad: Int
    estado: String
    producto: Inventario
  }

  input PedidoInput {
    id: ID
    fk_usuario: String
    fk_inventario: ID
    cantidad: Int
    estado: String
  }
`;

export const resolvers = {
  Pedido: {
    producto: ({ fk_inventario }) => obtenerInventarioPorId(fk_inventario),
  },
  Mutation: {
    registrarPedido: (_, { pedido }) => registrarPedido(pedido),
    eliminarPedido: (_, { id }) => eliminarPedido(id),
  },
};
