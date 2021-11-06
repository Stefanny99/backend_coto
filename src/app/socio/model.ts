import { bookshelf } from "../../config/db";

export default class Socio extends bookshelf.Model<Socio> {
  get tableName() {
    return "socio";
  }
}
