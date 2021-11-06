import { gql } from "apollo-server";

import {
  editarUsuario,
  eliminarUsuario,
  login,
  registrarUsuario,
} from "./loader";

export const typeDef = gql`
  type Usuario {
    id: ID
    rol: String
    nombre: String
    usuario: String
    contrasena: String
  }

  input UsuarioInput {
    id: ID
    rol: String
    nombre: String
    usuario: String
    contrasena: String
  }
`;

export const resolvers = {
  Usuario: {
    //pedidos: ({ id }) => pedidosUsuario(id)
  },
  Query: {
    login: (_, { usuario, contrasena }) => login(usuario, contrasena),
  },
  Mutation: {
    registrarUsuario: (_, { usuario }) => registrarUsuario(usuario),
    editarUsuario: (_, { usuario }) => editarUsuario(usuario),
    eliminarUsuario: (_, { id }) => eliminarUsuario(id),
  },
};
