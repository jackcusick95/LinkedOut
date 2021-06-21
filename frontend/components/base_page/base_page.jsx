import React from 'react';
import { Link } from 'react-router-dom';

const BasePage = ( ) => {

    // function getAlert(e) {
    //     e.preventDefault(); 
    //     alert("Coming soon!");
    // }

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
                    <div className="second-nav-button">
                        <Link to={"/login"}>
                            <button className="navbutton">Log in as demo user<i class="arrow right two"></i></button>
                        </Link>
                        {/* <span className="tooltip" >Feature coming soon!</span>
                        <button className="navbutton">Find a person you know<i class="arrow right two"></i></button> */}
                    </div>
                    <Link to={"/jobs"}>
                        <button className="navbutton">Search for a job<i class="arrow right one"></i></button>
                    </Link>
                    <div className="third-nav-button">
                        <span className="tooltip" >Feature coming soon!</span>
                        <button className="navbutton">Learn a new skill<i class="arrow right three"></i></button>
                    </div>
                </div>
            </nav>
            <img src="https://static-exp3.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59" id="bottom-img"/>
            <div className="footer">
                <h3 className="founder">Founder: <br/>
                    Jack Cusick</h3>
                <img className='faceshot' src={window.anotherface} />
                <div className="footlinks">
                    <a href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                        <img className='lilogo' src={window.linkedin} />
                    </a>
                    <a href="https://github.com/jackcusick95">
                        <img className='gitlogo' src={window.github} />
                    </a>
                </div>
            </div>
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