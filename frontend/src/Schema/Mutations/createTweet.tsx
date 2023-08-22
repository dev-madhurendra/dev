import { gql } from "@apollo/client";

export const CREATE_TWEET_MUTATION = gql`
  mutation CreateTweet($body: String!,$userId: String) {
    createTweet(body: $body , userId: $userId) {
      id
      body
      date
      markAsRead
    }
  }
`;
