import { connect } from "react-redux";
import HistoryPage from "./history_page";
import { logout } from '../../actions/session_actions';
import  {fetchUserCalculations} from "../../actions/calculation_actions";
import { fetchUserFortunes } from "../../actions/fortune_actions";
const mapStateToProps = (state) => {
    return{
        currentUser: state.session.user,
        fortunes: state.entities.fortunes.all,
        calculations: state.entities.calculations,
        users: state.entities.users
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
    logout: () => dispatch(logout()),
    fetchUserFortunes: userId => dispatch(fetchUserFortunes(userId)),
    fetchUserCalculations: (userId) => dispatch(fetchUserCalculations(userId))
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);