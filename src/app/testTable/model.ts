import { bookshelf } from "../../config/db";

export default class TestTable extends bookshelf.Model<TestTable> {
  get tableName() {
    return "test_table";
  }
}
