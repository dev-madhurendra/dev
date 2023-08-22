import { db } from "../db/data.js";
import jwt from "jsonwebtoken";

export const resolvers = {
  Query: {
    tweets: (parent: any, { limit, skip, sort_field, sort_order }) => {
      let tweets = db.tweets;

      if (sort_field && sort_order) {
        tweets = tweets.sort((a, b) => {
          if (sort_order === "asc") {
            return a[sort_field] - b[sort_field];
          } else if (sort_order === "desc") {
            return b[sort_field] - a[sort_field];
          }
        });
      }

      if (limit) {
        tweets = tweets.slice(0, limit);
      }

      if (skip) {
        tweets = tweets.slice(skip);
      }

      return tweets;
    },

    tweet: (parent: any, { id }: { id: String }) =>
      db.tweets.find((tweet) => tweet.id === id),

    tweetsMeta: () => {
      return { count: db.tweets.length };
    },

    user: (parent: any, { id }: { id: String }) =>
      db.users.find((user) => user.id === id),

    notifications: (parent: any, { limit }: { limit?: number }) => {
      if (limit) {
        return db.notifications.slice(0, limit);
      }
      return db.notifications;
    },

    notificationsMeta: () => {
      return { count: db.notifications.length };
    },

    login: async (parent, { email, password }) => {
      // console.log(db.users);
      const user = await db.credentials.find((user) => user.email === email);
      if (!user) {
        throw new Error("User does not exist!");
      }
      //bcrypt
      const isEqual = (await password) === user.password;
      if (!isEqual) {
        throw new Error("Password is incorrect!");
      }
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "somesupersecretkey",
        {
          expiresIn: "1h",
        }
      );

      return { userId: user.id, token: token, tokenExpiration: 1 };
    },
  },

  Tweet: {
    author: ({ Author }: any) => {
      return db.users.find((user) => user.id === Author.id);
    },
    stats: (tweet: { Stats: any }) => {
      return tweet.Stats;
    },
  },
  Meta: {
    count: (parent: any) => parent.count,
  },

  Mutation: {
    createTweet: (parent: any, args: { body: string,userId: string }) => {
      const { body,userId } = args;   
      const newTweet = {
        id: (db.tweets.length + 1).toString(),
        body,
        date: new Date(),
        Author: { id:userId},
        Stats: { views: 0, likes: 0, retweets: 0, responses: 0 },
        markAsRead: false,
      };
      db.tweets.push(newTweet);
      return newTweet;
    },

    deleteTweet: (parent: any, args: { id: string }) => {
      const { id } = args;
      const deletedTweet = db.tweets.find((t) => t.id === id);
      if (!deletedTweet) {
        throw new Error(`Tweet with ID - ${id} is not found`);
      }
      db.tweets = db.tweets.filter((t) => t.id !== id);
      return deletedTweet;
    },

    markTweetRead: (parent: any, args: { id: string }) => {
      const { id } = args;
      const tweet = db.tweets.find((tweet) => tweet.id === id);

      tweet.markAsRead = true;

      return true;
    },
  },
};
