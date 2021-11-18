import { gql } from "apollo-server";

export const mutationsDef = gql`
  type Mutation {
    registrarUsuario(usuario: UsuarioInput!): Boolean
    editarUsuario(usuario: UsuarioInput!): Boolean
    eliminarUsuario(id: ID!): Boolean

    registrarSocio(socio: SocioInput!): Socio
    editarSocio(socio: SocioInput!): Boolean
    desactivarSocio(id: ID!): Boolean

    registrarPedido(pedido: PedidoInput!): Pedido
    eliminarPedido(id: ID!): Boolean

    registrarInventario(inventario: InventarioInput!): Inventario
    editarInventario(inventario: InventarioInput!): Boolean
    desactivarInventario(id: ID!): Boolean
  }
`;
