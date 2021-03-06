
import React from 'react';
import { NavLink } from 'react-router-dom';
import './splash.css';

class SplashPage extends React.Component {
    render() {
        return (
            <div className="main-splash-container">
            
                <div className="center-image-section"> 
                    <img className="fortune-cookie-img" src="/fortune_couple.PNG" alt="fortune-cookie" />
                </div>
                <div><h1 className="splash-title">Get Your Fortune Today</h1></div>
               
                <NavLink className="Signup-link" to="/signup">Sign Up</NavLink>
                <NavLink className="Login-link" to="/login">Log In</NavLink>
                <NavLink className="creator-link" to="/creators">Meet Our Creators</NavLink>
            </div>
        )
    }
}
export default SplashPage;
