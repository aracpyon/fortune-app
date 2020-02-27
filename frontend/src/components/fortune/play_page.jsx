import React from 'react';
import "./play.scss";
import NavBarContainer from '../nav/nav_container';

class PlayPage extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    debugger
  }

  render(){
    if (!this.props.currentUser) { return null;} 
    const { currentUser, logout } = this.props;
    return (
      <>
        <NavBarContainer/>
      <div className="play-container">
        <h1 className="title">Choose a Person and Crack the Fortune!</h1>
        
        <div className="play-users">
          <div className="current-user">
            <img
              className="default-user-image"
              src="/default_user.PNG"
              alt="default_user"
            />
            <div className="username">{currentUser.username}</div>
          </div>
          <div className="second-user">
            <input className="lookup-input" placeholder="Look up user here" />
            <p className="or">Or</p>
            <div className="newUser-input" onClick={this.handleClick}>
              <p className="text">New User</p>
            </div>
          </div>
        </div>

        {/* <div className="crack-fortune"> */}
        <img
          className="crack-fortune-button"
          src="/crack_fortune.PNG"
          alt="crack_fortune"
        />
        {/* </div> */}
      </div>
        </>
    );
  }

}

export default PlayPage;