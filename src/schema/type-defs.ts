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
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
    comments: [Comment!]!
    postedBy: User
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Comment {
    id: ID!
    body: String!
    link: Link
  }
`;
