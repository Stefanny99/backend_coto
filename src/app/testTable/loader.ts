import TestTable from "./model";

export const getAllData = () =>
  TestTable.collection()
    .fetch()
    .then((data) => (data && data.toJSON()) || null);
