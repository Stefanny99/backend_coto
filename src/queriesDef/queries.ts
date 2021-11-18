import { gql } from "apollo-server";

export const queriesDef = gql`
  type Query {
    login(usuario: String!, contrasena: String!): Usuario
    obtenerSocios: [Socio]
    obtenerPedidos: [Pedido]
    obtenerInventario: [Inventario]
    busquedaSocio(texto: String): [Socio]
    busquedaInventario(texto: String): [Inventario]
    usuarioPorId(id: ID): Usuario
  }
`;
