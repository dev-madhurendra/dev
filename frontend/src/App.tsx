import React from "react";
import TwitterApp from "./TwitterApp";
import Login from "./components/Login";
import useToken from "./components/useToken";
import styled from "styled-components";
import { users } from './users'
import { Button } from "@material-ui/core";
import AuthProfile from "./components/AuthProfile";
import { Route, Routes } from "react-router-dom";

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  position:fixed;
  display:flex;
  justify-content:space-between;
  margin-left:5%;
  width:90vw;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;


function App() {
  const { token, setToken,setUser } = useToken();

  const handleLogout = () => {
    setToken({ token: "" });
    // setUser({user:""})
    sessionStorage.clear()
  };

  const tokenLocal = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  if (!token && !tokenLocal)  {
    return <Login setToken={setToken} />;
  }

  const username = users[+(userId ? userId : 0) - 1].username
  return (
    <div>
        <AppWrapper>
          <Header>
            <Title>
              <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" alt="logo" width={100} height={100} />
            </Title>
            <div>
              Logged in as @{username} 
              <br />
              <br />
              <Button onClick={handleLogout} variant="outlined" >Logout</Button>
            </div>
          </Header>
          <TwitterApp />
        </AppWrapper>
    </div>
  );
}

export default App;
