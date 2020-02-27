import { connect } from "react-redux";
import HistoryPage from "./history_page";

const mapStateToProps = (state) => ({
    history: {
       user_1: state.session.user,
       user_2: state.session.user

   },
   calculation: {
    fortune_id: "5e5429b68a9d1a20cccda412",
    percentage: "34%"

   },
   fortunes: {
    favorability: "Negative",
    sentence: "EW BAD Match! You can't be related :b"
   }
});

// const mapDispatchToProps = (dispatch) => ({
//     fetchUserFortunes: () => dispatch(fetchUserFortunes())
// });

export default connect(mapStateToProps)(HistoryPage);