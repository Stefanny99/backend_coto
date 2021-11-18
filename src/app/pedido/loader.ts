import Pedido from "./model";

export const registrarPedido = (pedido) =>
  Pedido.forge({ ...pedido })
    .save(null, { method: "insert" })
    .then((data) => (data && data.toJSON()) || null);

export const eliminarPedido = (id) =>
  Pedido.forge({ id })
    .destroy()
    .then(() => true)
    .catch(() => false);

export const pedidosUsuario = (id) =>
  Pedido.collection()
    .query((data) => data.where({ fk_usuario: id }))
    .fetch({ require: false })
    .then((data) => (data && data.toJSON()) || null);
