import Pedido from "./model";

export const registrarPedido = (pedido) =>
  Pedido.forge({ ...pedido })
    .save(null, { method: "insert" })
    .then(() => true)
    .catch(() => false);

export const eliminarPedido = (id) =>
  Pedido.forge({ id })
    .destroy()
    .then(() => true)
    .catch(() => false);
