import { AuthenticationError } from "apollo-server-errors";
import { decrypt, encrypt } from "../../helpers/crypto";
import Usuario from "./model";

export const registrarUsuario = (usuario) =>
  Usuario.forge({ ...usuario, contrasena: encrypt(usuario.contrasena) })
    .save(null, { method: "insert" })
    .then(() => true)
    .catch(() => false);

export const editarUsuario = (usuario) =>
  Usuario.forge({ id: usuario.id })
    .save({ ...usuario }, { patch: true })
    .then(() => true)
    .catch(() => false);

export const login = async (usuario, contrasena) => {
  const usu = await getByUserName(usuario);
  if (usu) {
    if (contrasena === decrypt(usu.contrasena)) return usu;
    else throw new AuthenticationError("Contraseña incorrecta");
  } else throw new AuthenticationError("Usuario no encontrado");
};

export const getByUserName = (usuario) =>
  Usuario.collection()
    .query((data) => data.where({ usuario: "admin" }))
    .fetchOne({ require: false })
    .then((data) => (data && data.toJSON()) || null);

export const eliminarUsuario = (id) =>
  Usuario.forge({ id })
    .destroy()
    .then(() => true)
    .catch(() => false);

export const usuarioPorId = (id) =>
  Usuario.collection()
    .query((user) => user.where({ id }))
    .fetchOne({ require: false })
    .then((user) => (user && user.toJSON()) || null);
