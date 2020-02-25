import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css';

class SplashPage extends React.Component {
    render() {
        return (
            <div>
              
                <div className="center-image-section"> 
                    <img className="fortune-cookie-img" src="/fortune-cookie-chinese.jpg" alt="fortune-cookie" />
                </div>
                <p><Link classname="Signup-link" to="/">Sign Up</Link>
                <Link classname="Login-link" to="/">Log In</Link></p>
            </div>
        )
    }
}
export default SplashPage;