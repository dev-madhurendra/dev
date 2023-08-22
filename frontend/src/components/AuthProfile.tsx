import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading,logout } = useAuth0();
  return (
    <div>
    {
        isAuthenticated ? (
            <div>
              <img src={user?.picture} alt={user?.name} />
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
              <p> {user?.preferred_username} </p>
              <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Logout </Button>
            </div>
        ) : <div>Login</div>
    }
    </div>
  )
}

export default AuthProfile