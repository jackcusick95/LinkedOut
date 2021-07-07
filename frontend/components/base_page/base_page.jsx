import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaPortrait, FaReact, FaHtml5, FaAws } from 'react-icons/fa';
import { SiPostgresql, SiRails, SiRedux } from 'react-icons/si';
import { DiJavascript, DiRuby } from 'react-icons/di';
import { GiSailboat } from 'react-icons/gi';

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
                            <button className="navbutton">Log in as demo user<i className="arrow right two"></i></button>
                        </Link>
                    </div>
                    <Link to={"/jobs"}>
                        <button className="navbutton">Search for a job<i className="arrow right one"></i></button>
                    </Link>
                    <div className="third-nav-button">
                        <span className="tooltip" >Feature coming soon!</span>
                        <button className="navbutton">Learn a new skill<i className="arrow right three"></i></button>
                    </div>
                </div>
            </nav>
            <img src="https://static-exp3.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59" id="bottom-img"/>
            <div className="footer">
                <div className="left-footer">
                    <div className="main-footer-info">
                        <img className='faceshot' src={window.anotherface} />
                        <h3 className="founder">Founder: <br/>
                            Jack Cusick</h3>
                    </div>
                    <ul className="footlinks">
                        <li className="footer-personal-links">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FaLinkedin className="footer-link-button" />
                                </IconContext.Provider>
                            </a>
                            <a className="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                               LinkedIn
                            </a>
                        </li>
                        <li className="footer-personal-links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackcusick95">
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FaGithub className="footer-link-button" />
                                </IconContext.Provider>
                            </a>
                            <a className="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://github.com/jackcusick95">
                                Github
                            </a>
                        </li>
                        <li className="footer-personal-links">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.jackcusick95.com/">
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FaPortrait className="footer-link-button" />
                                </IconContext.Provider>
                            </a>
                            <a className="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://www.jackcusick95.com/">
                                Personal Site
                            </a>
                        </li>
                        <li className="footer-personal-links">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.sailingworld.com/cougars-clench-team-race-national-championship/">
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <GiSailboat className="footer-link-button" />
                                </IconContext.Provider>
                            </a>
                            <a className="footer-link-text" target="_blank" rel="noopener noreferrer" href="https://www.sailingworld.com/cougars-clench-team-race-national-championship/">
                               Athletics
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right-footer">
                    <div className="main-footer-info">
                        {/* <img className='faceshot' src={window.anotherface} /> */}
                        <h3 className="founder">LinkedOut: <br />
                            Technologies Used</h3>
                    </div>
                    <div className="tech-used-container">
                        <ul className="right-footlinks">
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FaReact className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >React</p>
                            </li>
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <SiRedux className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >Redux</p>
                            </li>
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <DiJavascript className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >Javascript</p>
                            </li>
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FaHtml5 className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >HTML/ CSS</p>
                            </li>
                        </ul>
                        <ul className="left-footlinks">
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <SiPostgresql className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >PostgreSQL</p>
                            </li>
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <DiRuby className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >Ruby</p>
                            </li>
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <SiRails className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >Rails</p>
                            </li>
                            <li className="footer-personal-links">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FaAws className="footer-link-button" />
                                    </IconContext.Provider>
                                <p className="footer-tech-text" >AWS</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default BasePage; 