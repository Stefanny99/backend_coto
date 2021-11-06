import { bookshelf } from "../../config/db";

export default class Pedido extends bookshelf.Model<Pedido> {
  get tableName() {
    return "pedido";
  }
}
