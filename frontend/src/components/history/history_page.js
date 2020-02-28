import React from 'react';
import "./history.scss";
import {Link} from 'react-router-dom'
class HistoryPage extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        debugger;
        this.props.fetchUserCalculations(this.props.currentUser["id"]);
        this.props.fetchUserFortunes(this.props.currentUser["id"]);

    }

    render() {
   debugger;
                return(
        
        <>
        <button className = "logout-button" onClick={this.props.logout}>Logout</button>
   
            <h1>History for {this.props.currentUser["username"]}</h1>
                
            <li>{this.props.fortunes["favorability"]}</li>
            <li>{this.props.fortunes["sentence"]}</li>        {/* <h3>{this.props.history["user_2"]["username"]}</h3>
        </div>
        <li>Fortune Id: {this.props.calculation["fortune_id"]}</li>
        <li>Percentage: {this.props.calculation["percentage"]}</li>
        <li>Favorability: {this.props.fortunes["favorability"]}</li>
        <li>{this.props.fortunes["sentence"]}</li> */}

      </>
        )
    }   
}

export default HistoryPage;