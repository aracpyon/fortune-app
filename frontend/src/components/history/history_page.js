import React from 'react';
import "./history.scss";

class HistoryPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
   debugger;
                return(
        
        <ul><h1>History</h1>
        <div className="first-record">
        <h3>{this.props.history["user_1"]["username"]}</h3>
        <h3>{this.props.history["user_2"]["username"]}</h3>
        </div>
        <li>Fortune Id: {this.props.calculation["fortune_id"]}</li>
        <li>Percentage: {this.props.calculation["percentage"]}</li>
        <li>Favorability: {this.props.fortunes["favorability"]}</li>
        <li>{this.props.fortunes["sentence"]}</li>

      </ul>
        )
    }   
}

export default HistoryPage;