import React from 'react';
import "./history.scss";
import {Link} from 'react-router-dom'
class HistoryPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.fetchUserCalculations(this.props.currentUser.id);
        this.props.fetchFortunes();
    }
    render() {
        const { currentUser, fortunes, calculations } = this.props;

        return(
            <ul>
            <div>Histroy page</div>
            <button className = "logout-button" onClick={this.props.logout}>Logout</button>
            <Link className="play-button" to="/play">Play</Link>

                <h1>History for {currentUser.username}</h1>
            {/* <div className="first-record">
            
            <h3>{this.props.history["user_2"]["username"]}</h3>
            </div>
            <li>Fortune Id: {this.props.calculation["fortune_id"]}</li>
            <li>Percentage: {this.props.calculation["percentage"]}</li>
            <li>Favorability: {this.props.fortunes["favorability"]}</li>
            <li>{this.props.fortunes["sentence"]}</li> */}

      </ul>
        )
    }   
}

export default HistoryPage;