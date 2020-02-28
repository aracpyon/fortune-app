import { connect } from "react-redux";
import HistoryPage from "./history_page";
import { logout } from '../../actions/session_actions';
import  {fetchUserCalculations} from "../../actions/calculation_actions";
import {fetchUserFortunes} from "../../actions/fortune_actions";
const mapStateToProps = (state) => {
    debugger;
    return{
    currentUser: state.session.user,
   fortunes: state.entities.fortunes,
   calculations: state.entities.calculations}
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUserFortunes: (user_id) => dispatch(fetchUserFortunes(user_id)),
    fetchUserCalculations: (user_id) => dispatch(fetchUserCalculations(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);