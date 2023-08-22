import pkg from '@apollo/client';
const { gql } = pkg;

export const typeDefs = gql`


   type Tweet {
      id: ID!
      body: String!
      date: Date!
      author: User!
      stats: Stat!
      markAsRead: Boolean!
   }

   type User {
      id: ID!
      username: String!
      first_name: String!
      last_name: String!
      full_name: String!
      name: String @deprecated
      avatar_url: Url!
   }

   type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int! 
   }

   type Stat {
      views: Int
      likes: Int
      retweets: Int
      responses: Int
   }

   type Meta {
      count: Int
   }

   type Notification {
      id: ID
      date: Date
      type: String
   }


   type Query {
      tweet(id: ID!): Tweet
      tweets(limit: Int, skip: Int, sort_field: String, sort_order: String): [Tweet]
      tweetsMeta: Meta
      user(id: ID!): User
      notifications(limit: Int): [Notification]
      notificationsMeta: Meta
      login(email: String!, password: String!): AuthData
   }

   scalar Url
   scalar Date

   type Mutation {
      createTweet (
         body: String,
         userId: String
      ): Tweet
      deleteTweet(id: ID!): Tweet
      markTweetRead(id: ID!): Boolean
   }

`;
