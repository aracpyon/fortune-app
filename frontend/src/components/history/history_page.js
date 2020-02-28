import React from "react";
import "./history.scss";
import { Link } from "react-router-dom";
import HistoryItem from "./history_item";

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);

  
  }

  componentDidMount() {
    this.props
      .fetchUserCalculations(this.props.currentUser.id)
      .then(() => this.props.fetchUserFortunes(this.props.currentUser.id));
  }

  render() {
    const { currentUser, fortunes, users, calculations } = this.props;


    let historyItem = null;

    if (calculations.length > 0 && fortunes.length > 0){
    historyItem = calculations.map(calculation => {
            let getFortune;

            fortunes.map(fortune => {
              if (fortune._id === calculation.fortune_id) {
                getFortune = fortune;
              }
            });
            return <HistoryItem calculation={calculation} fortune={getFortune} users={users}/>;
          });
    }
    
    return (
      <div>
        <button className="logout-button" onClick={this.props.logout}>
          Logout
        </button>
        <Link className="play-button" to="/play">
          Play
        </Link>
        <h1 className="history-title">History for {currentUser.username}</h1>
        {historyItem}
  
      </div>
    );
  }

}

export default HistoryPage;
