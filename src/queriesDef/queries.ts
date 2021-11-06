import { gql } from "apollo-server";

export const queriesDef = gql`
  type Query {
    login(usuario: String!, contrasena: String!): Usuario
    obtenerSocios: [Socio]
    obtenerInventario: [Inventario]
  }
`;
