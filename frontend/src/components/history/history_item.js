import React from 'react';

const HistoryItem = (props) => {
  
  const { fortune, calculation, users } = props;
  return(
    <div className="history-item-container">
      <h3 className="love_matches">
        {users[calculation.user_2].username}</h3>
      <div>{calculation.percentage}</div>
      <div>{fortune.sentence}</div>
    </div>
  )}
  


  


export default HistoryItem;