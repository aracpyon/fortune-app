
import { fetchUsers } from "../../actions/user_actions";
import { connect } from 'react-redux';
import PlayPage from './play_page';
import { logout } from '../../actions/session_actions';
import { createCalculation } from '../../actions/calculation_actions';

const mSTP = state => {
  // debugger
  return {
    currentUser: state.session.user,
    allUsers: state.entities.users
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    createCalculation: twoUsers => dispatch(createCalculation(twoUsers))
  };
};

export default connect(mSTP, mDTP)(PlayPage);
