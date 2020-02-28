import React from 'react';
import "./history.scss";
import {Link} from 'react-router-dom'
import HistoryItem from './history_item';

class HistoryPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUserCalculations(this.props.currentUser.id).then(() => this.props.fetchUserFortunes(this.props.currentUser.id));
        
    }
    render() {

        const { currentUser, fortunes, users, calculations } = this.props;
       if ( this.props.calculations === undefined || this.props.fortunes === undefined ) return null;
       
            
       
       
        return(
            <div>
    
                <button className = "logout-button" onClick={this.props.logout}>Logout</button>
                <Link className="play-button" to="/play">Play</Link>

                <h1>History for {currentUser.username}</h1>
                {calculations.map(calculation => {
                    let getFortune;
                    fortunes.map(fortune => {
                        if (fortune._id === calculation.fortune_id){
                            getFortune = fortune;
                        }
                    })
                    return <HistoryItem 
                        calculation={calculation}
                        fortune={getFortune}
                        />
                    })
                }
                
                {/* <div className="first-record">
                
                <h3>{this.props.history["user_2"]["username"]}</h3>
                </div>
                <li>Fortune Id: {this.props.calculation["fortune_id"]}</li>
                <li>Percentage: {this.props.calculation["percentage"]}</li>
                <li>Favorability: {this.props.fortunes["favorability"]}</li>
                <li>{this.props.fortunes["sentence"]}</li> */}

            </div>
        )
            
        
    }   
}

export default HistoryPage;