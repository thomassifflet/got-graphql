export const typeDefs = `

  type Mutation {
    addCharacter(id: ID!, name: String!): String
    deleteCharacter(id: ID!): Boolean
    updateCharacter(id: ID!, name: String!): Boolean
  }

  type Query {
    characters: [Character]
    houses: [House]
  }
`;
