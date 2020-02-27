import { connect } from "react-redux";
import HistoryPage from "./history_page";

const mapStateToProps = (state) => ({
    fortunes: Object.values(state.fortunes)
});

const mapDispatchToProps = (dispatch) => ({
    fetchUserFortunes: () => dispatch(fetchUserFortunes())
});n 