import { gql } from "apollo-server";

import { editarSocio, obtenerSocios, registrarSocio } from "./loader";

export const typeDef = gql`
  type Socio {
    id: ID
    cedula: String
    nombre: String
    estado: String
  }

  input SocioInput {
    id: ID
    cedula: String
    nombre: String
    estado: String
  }
`;

export const resolvers = {
  Query: {
    obtenerSocios: () => obtenerSocios(),
  },
  Mutation: {
    registrarSocio: (_, { socio }) => registrarSocio(socio),
    editarSocio: (_, { socio }) => editarSocio(socio),
  },
};
