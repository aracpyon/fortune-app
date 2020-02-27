import { connect } from 'react-redux';
import PlayPage from './play_page';
import { logout } from '../../actions/session_actions';


const mSTP = (state) => {
  // debugger
  return {
    currentUser: state.session.user
  }
}

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mSTP, mDTP)(PlayPage);