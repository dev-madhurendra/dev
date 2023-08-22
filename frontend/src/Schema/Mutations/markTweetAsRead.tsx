import { gql } from "@apollo/client";

export const MARK_TWEET_MUTATION = gql`
  mutation ($id: ID!) {
    markTweetRead(id: $id)
  }
`;
