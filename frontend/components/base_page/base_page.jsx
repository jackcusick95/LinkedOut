import React from 'react';
import { Link } from 'react-router-dom';

const BasePage = ( ) => {
    return (
       <div className="base-page">
            <nav className="nav-bar">
                <div className="left-nav">
                        <img className='logo' src={window.logo} />
                </div>
                <div className="base-buttons">
                    <Link id="joinnow" to="/signup">Join now</Link>
                    <Link id="signin" to="/login">Sign in</Link>
                </div>
                <h1 className="base-header">Welcome to your <br/>
                    professional community</h1>

                <img src="https://static-exp3.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" id="background-img" />
                <div className="nav-buttons">
                    <button id="navbutton">Search for a job</button>
                    <button id="navbutton">Find a person you know</button>
                    <button id="navbutton">Learn a new skill</button>
                </div>
            </nav>
            <img src="https://static-exp3.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59" id="bottom-img"/>
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