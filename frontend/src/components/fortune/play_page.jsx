import React from 'react';
import "./play.scss";

class PlayPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    // const { currentUser } = this.props;
    return (
      <div className="play-container">
        <div className="play-users">
          <div className="current-user">
            <img
              className="default-user-image"
              src="/default_user.PNG"
              alt="default_user"
            />
            <div className="username">Ara</div>
          </div>
          <div className="second-user">
            <input
              className="lookup-input"
              placeholder="Look up user here" />
            <div className="newUser-input"><p className="text">New User</p></div>
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
    );
  }

}

export default PlayPage;