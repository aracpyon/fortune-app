import { connect } from 'react-redux';
import PlayPage from './play_page';
import { logout } from '../../actions/session_actions';
import { createCalculation } from '../../actions/calculation_actions';


const mSTP = (state) => {
  // debugger
  return {
    currentUser: state.session.user
  }
}

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    createCalculation: twoUsers => dispatch(createCalculation(twoUsers))
   
  }
}

export default connect(mSTP, mDTP)(PlayPage);
