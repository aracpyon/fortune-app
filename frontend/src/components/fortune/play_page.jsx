import React from "react";
import "./play.scss";
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav/nav_container';

class PlayPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: [],
      user_1: this.props.currentUser,
      user_2: undefined
    };

    this.changeComplete = this.changeComplete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateUser2 = this.updateUser2.bind(this);
  }

  changeComplete() {
    return e => {
      const matchingWord = e.currentTarget.value;
      // const currentList = this.state.allUsers;
      const currentList = Object.values(this.props.allUsers);
      let updatedArr = [];
      currentList.forEach(user => {
        if (user.username.includes(matchingWord)) {
          updatedArr.push(user);
        }
      });
      return this.setState({
        allUsers: updatedArr
      });
    };
  }

  componentDidMount() {
    this.props.fetchUsers().then(load => {
      this.setState({
        allUsers: load.users.data
      });
    });
  }

  handleClick() {
    this.props.createCalculation(this.state).then(
      success => {
        this.props.history.push('/result');
      }
    );
  }

  updateUser2(userId) {
    this.setState({
      user_2: this.props.allUsers[userId]
    });
  }

  render() {
    let dropDownNames = null;
    if (this.state.allUsers) {
      let allUsersArr = Object.values(this.state.allUsers);
      if (allUsersArr.length > 0) {
        let usersEls = allUsersArr.map(user => {
          return (
            <li onClick={() => this.updateUser2(user._id)}>{user.username}</li>
          );
        });
        dropDownNames = <ul className="auto-options">{usersEls}</ul>;
      }
    }

    if (!this.props.currentUser) {
      return null;
    }
    const { currentUser, logout } = this.props;

    let user2Element = null;

    if (this.state.user_2) {
      user2Element = (
        <div className="current-user">
          <img
            className="default-user-image"
            src="/default_user.PNG"
            alt="default_user"
          />
          <div className="username">{this.state.user_2.username}</div>
        </div>
      );
    } else {
      user2Element = (
        <div className="second-user">
          <div className="lookup-container">
            <input
              className="lookup-input"
              placeholder="Look up user here"
              onChange={this.changeComplete()}
            />
            {dropDownNames}
          </div>
          <p className="or">Or</p>
          <div className="newUser-input" onClick={this.handleClick}>
            <p className="text">New User</p>
          </div>
        </div>
      );
    }

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
          {user2Element}
        </div>

        
        <img
          className="crack-fortune-button"
          src="/crack_fortune.PNG"
          alt="crack_fortune"
          onClick={this.handleClick}
        />
        
      </div>
        </>
    );
  }
}
// export default PlayPage;
export default withRouter(PlayPage);

