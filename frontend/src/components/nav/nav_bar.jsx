import React from "react";


class NavBar extends React.Component{
    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.logout().then(this.props.history.push('/'));
    }
    render() {
        const currentUser = this.props.currentUser;
    
        if (currentUser) {
            return (
                <button className = "logout-button" onClick={this.handleClick}>Logout</button>
            )
        }
    }

};

export default NavBar;
