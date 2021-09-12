import { gql } from "apollo-server";
import { getAllData } from "./loader";

export const typeDef = gql`
  type TestTable {
    id: ID
    TestingString: String
  }

  input TestTableInput {
    id: ID
    TestingString: String
  }
`;

export const resolvers = {
  Query: {
    GetTestTableData: () => getAllData(),
  },
};
