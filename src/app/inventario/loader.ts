import Inventario from "./model";

export const registrarInventario = (inventario) =>
  Inventario.forge({ ...inventario })
    .save(null, { method: "insert" })
    .then(() => true)
    .catch(() => false);

export const editarInventario = (inventario) =>
  Inventario.forge({ id: inventario.id })
    .save({ ...inventario }, { patch: true })
    .then(() => true)
    .catch(() => false);

export const desactivarInventario = (id) =>
  Inventario.forge({ id })
    .save({ estado: "I" }, { patch: true })
    .then(() => true)
    .catch(() => false);

export const obtenerInventario = () =>
  Inventario.collection()
    .fetch({ require: false })
    .then((data) => (data && data.toJSON()) || null);
