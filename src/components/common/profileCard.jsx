import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();
    if (!isAuthenticated) return <p></p>;
    return (
        <div className='profile-card'>
            <p>👤 {user.nickname}</p>
            <p>✉️ {user.email}</p>
        </div>
    );
};

export default UserProfile;