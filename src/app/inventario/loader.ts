import Inventario from "./model";

export const registrarInventario = (inventario) =>
  Inventario.forge({ ...inventario })
    .save(null, { method: "insert" })
    .then((data) => (data && data.toJSON()) || null);

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

export const busquedaInventario = (texto) =>
  Inventario.collection()
    .where("nombre", "LIKE", `%${texto}%`)
    .orWhere("codigo", "LIKE", `%${texto}%`)
    .fetch({ require: false })
    .then((data) => (data && data.toJSON()) || null);
