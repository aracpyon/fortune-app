import { connect } from "react-redux";
import HistoryPage from "./history_page";
import { logout } from '../../actions/session_actions';
import  {fetchUserCalculations} from "../../actions/calculation_actions";
import {fetchFortunes} from "../../actions/fortune_actions";
const mapStateToProps = (state) => {
    debugger;
    return{
        currentUser: state.session.user,
        fortunes: state.entities.fortunes.all,
        calculations: state.entities.calculations.data
    }
};

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
    logout: () => dispatch(logout()),
    // fetchUserFortunes: () => dispatch(fetchUserFortunes()),
    fetchFortunes: () => dispatch(fetchFortunes()),
    fetchUserCalculations: (userId) => dispatch(fetchUserCalculations(userId))
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);