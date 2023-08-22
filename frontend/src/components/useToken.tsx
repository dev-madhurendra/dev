import { useState } from "react";

interface UserToken {
  token: string;
}

export default function useToken() {
  const getToken = (): string | undefined => {
    const tokenString = sessionStorage.getItem("token");
    const userToken: UserToken | null = tokenString
      ? JSON.parse(tokenString)
      : null;
    return userToken?.token;
  };

  const getUser = () => {
    const tokenString = sessionStorage.getItem("userId");
    const userToken: UserToken | null = tokenString
      ? JSON.parse(tokenString)
      : null;
    return userToken;
  }

  const [token, setToken] = useState<string | undefined>(getToken());

  const [user,setUser] = useState(getUser());

  const saveToken = (userToken: UserToken) => {
    console.log(userToken.token);
    sessionStorage.setItem("token", JSON.stringify(userToken.token));
    setToken(userToken.token);
  };

  const saveUser = (user: any) => {
    console.log(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return {
    setToken: saveToken,
    token,
    user,
    setUser: saveUser
  };
}
