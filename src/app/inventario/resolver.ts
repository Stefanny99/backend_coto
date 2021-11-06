import { gql } from "apollo-server";

import {
  editarInventario,
  obtenerInventario,
  registrarInventario,
} from "./loader";

export const typeDef = gql`
  type Inventario {
    id: ID
    codigo: String
    nombre: String
    descripcion: String
    precio: Float
    categoria: String
    cantidad: Int
    imagen: String
    estado: String
    whatsapp: String
    email: String
  }

  input InventarioInput {
    id: ID
    codigo: String
    nombre: String
    descripcion: String
    precio: Float
    categoria: String
    cantidad: Int
    imagen: String
    estado: String
    whatsapp: String
    email: String
  }
`;

export const resolvers = {
  Query: {
    obtenerInventario: () => obtenerInventario(),
  },
  Mutation: {
    registrarInventario: (_, { inventario }) => registrarInventario(inventario),
    editarInventario: (_, { inventario }) => editarInventario(inventario),
  },
};
