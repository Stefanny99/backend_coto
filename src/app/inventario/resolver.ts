import { gql } from "apollo-server";

import {
  busquedaInventario,
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
    correo: String
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
    correo: String
  }
`;

export const resolvers = {
  Query: {
    obtenerInventario: () => obtenerInventario(),
    busquedaInventario: (_, { texto }) => busquedaInventario(texto),
  },
  Mutation: {
    registrarInventario: (_, { inventario }) => registrarInventario(inventario),
    editarInventario: (_, { inventario }) => editarInventario(inventario),
  },
};
