import React from "react";
import "./rand_calc.css";

class RandCalc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_1: null,
      user_2: null
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchTwoRandomUsers().then(
      success => {
        this.setState({
          user_1: success.twoRandomUsers.data[0],
          user_2: success.twoRandomUsers.data[1]
        });
      }
    );
  }

  handleClick(){
    this.props.createCalculation(this.state);
  }

  getUser(){
    this.props.fetchTwoRandomUsers().then(
      success => {
        this.setState({
          user_1: success.twoRandomUsers.data[0],
          user_2: success.twoRandomUsers.data[1]
        });
      }
    );
  }

  render() {
    const twoUsers = this.props.twoUsers;
    if (!twoUsers) {
      return null;
    }
    const usersArr = Object.values(twoUsers).map(user => {
      return <div>{user.username}</div>;
    });

    let fortune = null;
    if (this.props.fortuneCookie){
      fortune = (
        <>
        <div>
          {this.props.fortuneCookie.percentage} match!
        </div>
        <div>
          {this.props.fortuneCookie.sentence}
        </div>
        </>
      )
    }

    return (
    <div>
      <button onClick={this.getUser}>Get Users</button>
      {usersArr}
      <button onClick={this.handleClick}>Get Cookie</button>
      {fortune}
    </div>
      );
  }
}

export default RandCalc;
