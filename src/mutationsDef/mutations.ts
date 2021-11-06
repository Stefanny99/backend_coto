import { gql } from "apollo-server";

export const mutationsDef = gql`
  type Mutation {
    registrarUsuario(usuario: UsuarioInput!): Boolean
    editarUsuario(usuario: UsuarioInput!): Boolean
    eliminarUsuario(id: ID!): Boolean

    registrarSocio(socio: SocioInput!): Boolean
    editarSocio(socio: SocioInput!): Boolean
    desactivarSocio(id: ID!): Boolean
  }
`;
