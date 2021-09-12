import { gql } from "apollo-server";

export const queriesDef = gql`
  type Query {
    GetTestTableData: [TestTable]
  }
`;
