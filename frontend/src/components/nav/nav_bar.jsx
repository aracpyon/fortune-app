import React from "react"

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