import { bookshelf } from "../../config/db";

export default class Usuario extends bookshelf.Model<Usuario> {
  get tableName() {
    return "usuario";
  }
}
