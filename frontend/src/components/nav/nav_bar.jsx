import React from "react"
import './nav.scss';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const currentUser = this.props.currentUser;
        if (currentUser) {
            return (
                <button className = "logout-button" onClick={this.props.logout}>Logout</button>
            )
        }
    }
}
export default NavBar;