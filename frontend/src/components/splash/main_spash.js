import React from 'react';
import { NavLink } from 'react-router-dom';
import './splash.css';

class SplashPage extends React.Component {
    render() {
        return (
            <div className="main-splash-container">
              
                <div className="center-image-section"> 
                    <img className="fortune-cookie-img" src="/fortune-cookie-chinese.jpg" alt="fortune-cookie" />
                </div>
                <NavLink classname="Signup-link" to="/signup">Sign Up</NavLink>
                <NavLink classname="Login-link" to="/login">Log In</NavLink>
            </div>
        )
    }
}
export default SplashPage;