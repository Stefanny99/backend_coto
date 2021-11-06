import { bookshelf } from "../../config/db";

export default class Inventario extends bookshelf.Model<Inventario> {
  get tableName() {
    return "inventario";
  }
}
