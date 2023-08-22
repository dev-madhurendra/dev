import { gql, useQuery } from "@apollo/client";

const GET_TWEETS = gql`
  query {
    tweets {
      id
      body
      date
      markAsRead
      author {
        id
        username
        full_name
        avatar_url
      }
      stats {
        views
        likes
        retweets
        responses
      }
    }
  }
`;

export const useTweets = () => {
  const { error, data, loading, refetch } = useQuery(GET_TWEETS);

  return {
    error,
    data,
    loading,
    refetch,
  };
};
