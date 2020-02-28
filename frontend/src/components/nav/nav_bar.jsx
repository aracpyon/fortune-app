import React from "react"
import './nav.scss';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Nav">
            <button className = "logout-button" onClick={this.props.logout}>Logout</button>
            <Link className="history-button" to="/history">History</Link>
            
            </div>
        )
    }
}
export default NavBar;