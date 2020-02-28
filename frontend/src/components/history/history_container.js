import { connect } from "react-redux";
import HistoryPage from "./history_page";
import { logout } from '../../actions/session_actions';
import  {fetchCalculations} from "../../actions/calculation_actions";
import {fetchUserFortunes} from "../../actions/fortune_actions";
const mapStateToProps = (state) => {
    debugger;
    return{
   fortunes: state.entities.fortunes,
   calculations: state.entities.calculations}
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUserFortunes: () => dispatch(fetchUserFortunes()),
    fetchCalculations: () => dispatch(fetchCalculations())
});

export default connect(mapStateToProps)(HistoryPage);