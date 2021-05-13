import React from 'react';
import { Link } from 'react-router-dom';

const BasePage = ( ) => {
    return (
       <div className="base-page-container">
            <nav className="nav-bar">
                <div className="left-nav">
                    <Link to={"/"}>
                        <img className='logo' src={window.logo} />
                    </Link>
                </div>
                <div className="right-nav">
                    <Link id="nav-signup" to="/signup">Join Now</Link>
                    <Link id="nav-signin" to="/login">Sign In</Link>
                </div>
            </nav>
       </div>
    )
    // const loggedOutLinks = () => (
    // );

    // const loggedInPage = () => (
    //     <div>
    //         <h1>Hello {currentUser.username}</h1>
    //         <button onClick={logoutUser}>Sign Out</button>
    //     </div>
    // );

    // return currentUser ? loggedInPage() : loggedOutLinks(); 
}

export default BasePage; 