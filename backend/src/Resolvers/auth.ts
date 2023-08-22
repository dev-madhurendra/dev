import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db as allUsers } from "../db/data"; 


interface LoginArgs {
  email: string;
  password: string;
}

interface AuthData {
  userId: string;
  token: string;
  tokenExpiration: number;
  username:string;
}

export default {
  login: async (
    parent: any,
    { email, password }: LoginArgs,
    { db }: { db: any }
  ): Promise<AuthData> => {
    const user = await db.user.findOne({ email: email });
    const userName = allUsers.users[+user.id - 1].username;
    console.log("userName ," , userName);
    if (!user) {
      throw new Error("User does not exist!");
    }

    const isEqual = await bcrypt.compare(password, user.password);
      
    !isEqual && new Error("Password is incorrect!");

    
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "secretkey",
      {
        expiresIn: "1h",
      }
    );

    return { userId: user.id,username:userName, token: token, tokenExpiration: 1 };
  },
};
