import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButtons = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return <div className='login-buttons'>
        {
            isAuthenticated ? (
                <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
            ) : (
                <button onClick={loginWithRedirect}>Login</button>
            )
        }
    </div>;
};

export default LoginButtons;