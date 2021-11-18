import Socio from "./model";

export const registrarSocio = (socio) =>
  Socio.forge({ ...socio })
    .save(null, { method: "insert" })
    .then((data) => (data && data.toJSON()) || null);

export const editarSocio = (socio) =>
  Socio.forge({ id: socio.id })
    .save({ ...socio }, { patch: true })
    .then(() => true)
    .catch(() => false);

export const obtenerSocios = () =>
  Socio.collection()
    .fetch({ require: false })
    .then((data) => (data && data.toJSON()) || null);

export const busquedaSocio = (texto) =>
  Socio.collection()
    .query((data) =>
      data
        .where("nombre", "LIKE", `%${texto}%`)
        .orWhere("cedula", "LIKE", `%${texto}%`)
    )
    .fetch({ require: false })
    .then((data) => (data && data.toJSON()) || null);
