import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLazyQuery, gql } from "@apollo/client";
import styled from "styled-components";
import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";

interface LoginProps {
  setToken: (token: { token: string }) => void;
}

// Login Query

const GET_LOGIN = gql`
  query Login($username: String!, $password: String!) {
    login(email: $username, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

// Styled Components for the login page
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const LoginTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

// Login Component

const Login = ({ setToken }: LoginProps) => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const [getlogin, { data }] = useLazyQuery(GET_LOGIN, {
    variables: { username, password },
  });

  async function loginUser(username: string, password: string) {
    return getlogin();
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser(username, password);
    setLoad(true);
  };

  useEffect(() => {
    if (load && data) {
      console.log("data login " , data);
      sessionStorage.setItem("userId",data.login.userId);
      
      const token = {
        token: data.login.token,
      };
      setToken(token);
      setLoad(false);
    }
  }, [data, load, setToken]);

  const { loginWithRedirect } = useAuth0();

  return (

    <div className="center">
      <div className="login-container">
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1>Login to</h1>
            <p style={{visibility:"hidden"}}> hl  </p> 
            <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="logo" width={30} height={30} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserName(e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {/* <p style={{textAlign:"center"}} >Or</p> */}
          {/* <button onClick={() => loginWithRedirect()} type="submit" >Login with google</button> */}
        </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
