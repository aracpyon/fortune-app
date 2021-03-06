import React from "react";
import "./result.scss";
import { Link } from "react-router-dom";
import NavBarContainer from "../nav/nav_container";

class ResultPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_1: {
        zodiac: "Aquarius"
      },
      user_2: {
        zodiac: "Aquarius"
      }
    };
  }

  render() {
    const { percentage } = this.props.calculation;
    const { sentence } = this.props.fortune;
    const { user_1, user_2 } = this.props.users;

    let user2Component = null;

    if (user_2) {
      user2Component = (
        <div className="user">
          <img
            className="user-zodiac-image"
            src={`/${user_2.zodiac}.png`}
            alt="user_2-zodiac"
          />
          <div className="user-zodiac">{user_2.zodiac}</div>
          <div className="user-username">{user_2.username}</div>
        </div>
      );
    }

    if (user_2 === undefined || user_1 === undefined) {
      this.props.history.push("/");
    }

    return (
      <>
        <NavBarContainer />
        <div className="result-page-container">
          <h1 className="title">Here is your result</h1>
          <div className="result-contents">
            <div className="user">
              <img
                className="user-zodiac-image"
                src={`/${user_1.zodiac}.png`}
                alt="user_1-zodiac"
              />
              <div className="user-zodiac">{user_1.zodiac}</div>
              <div className="user-username">{user_1.username}</div>
            </div>
            <div className="percents">
              <div className="percentage">{percentage}</div>
              <div className="percent-mark">%</div>
            </div>
            {user2Component}
          </div>

          <div className="result-sentence">
            <div className="sentence">{`" ${sentence} "`}</div>
            <img
              className="your-fortune"
              src="/your_fortune.PNG"
              alt="your-fortune"
            />
          </div>
          <div className="play-button-div">
            <Link className="play-again" to="/play">
              Play Again
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default ResultPage;
