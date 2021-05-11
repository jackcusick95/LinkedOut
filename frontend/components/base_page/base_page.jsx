import React from 'react';
import { Link } from 'react-router-dom';

const BasePage = ( {currentUser, logoutUser }) => {
    const loggedOutLinks = () => (
       <nav>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Join Now</Link>
        </nav>
    );

    const loggedInPage = () => (
        <div>
            <h1>Hello {currentUser.username}</h1>
            <button onClick={logoutUser}>Sign Out</button>
        </div>
    );

    return currentUser ? loggedInPage() : loggedOutLinks(); 
}

export default BasePage; 