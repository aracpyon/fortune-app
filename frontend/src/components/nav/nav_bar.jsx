import React from "react"
import './nav.scss';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className = "logout-button" onClick={this.props.logout}>Logout</button>
        )
    }
}
export default NavBar;