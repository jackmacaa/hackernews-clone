export const typeDefinitions = /* GraphQL */ `
  type Query {
    info: String!
    comment(id: ID!): Comment
    link(id: ID): Link
    feed(filterNeedle: String, skip: Int, take: Int): [Link!]!
    # me: User!
  }

  type Mutation {
    postLink(url: String!, description: String!): Link!
    postCommentOnLink(linkId: ID!, body: String!): Comment!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    body: String!
    link: Link
  }
`;
