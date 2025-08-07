import gql from 'graphql-tag';

export const userTypeDefs = gql`
  extend type Query {
    userProfile(id: ID!): UserProfile!
    user(id: ID!): UserPayload!
  }

  # Single-word type: User -> user.ts
  type User {
    id: ID!
  }

  # Multi-word type: UserProfile -> user-profile.ts
  type UserProfile {
    id: ID!
  }
`;
