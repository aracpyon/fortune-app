import { connect } from 'react-redux';
import NavBar from "./nav";
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.user]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);