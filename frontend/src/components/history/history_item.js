import React from "react";

const HistoryItem = props => {
  if (!props) { return null }
  const { fortune, calculation, users } = props;
  return (
    <div className="history-item-container">
      <div className="lovematchcontainer">
        <h3 className="love_matches">{users[calculation.user_2].username}</h3>
        <div className="fortuneInfo">
          <div className="calcperc">{calculation.percentage}</div>
          <div className="fortune_sent">{fortune.sentence}</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
