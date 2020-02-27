import React from 'react';
import "./history.scss";

class HistoryPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
   
                return(
        
        <ul><h2>History</h2>
        {Object.keys(this.props.history)}
      </ul>
        )
    }   
}

export default HistoryPage;