import Socio from "./model";

export const registrarSocio = (socio) =>
  Socio.forge({ ...socio })
    .save(null, { method: "insert" })
    .then(() => true)
    .catch(() => false);

export const editarSocio = (socio) =>
  Socio.forge({ id: socio.id })
    .save({ ...socio }, { patch: true })
    .then(() => true)
    .catch(() => false);

export const desactivarSocio = (id) =>
  Socio.forge({ id })
    .save({ estado: "I" }, { patch: true })
    .then(() => true)
    .catch(() => false);

export const obtenerSocios = () =>
  Socio.collection()
    .fetch({ require: false })
    .then((data) => (data && data.toJSON()) || null);
