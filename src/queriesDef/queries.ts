import { gql } from "apollo-server";

export const queriesDef = gql`
  type Query {
    GetTestTableData: [TestTable]
    login(usuario: String!, contrasena: String!): Usuario
    obtenerSocios: [Socio]
  }
`;
