import { gql } from "@apollo/client";

export const DELETE_TWEET_MUTATION = gql`
  mutation DeleteTweet($id: ID!) {
    deleteTweet(id: $id) {
      id
      body
      date
    }
  }
`;
