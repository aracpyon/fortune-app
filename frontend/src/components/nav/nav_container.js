import { connect } from 'react-redux';
import NavBar from "./nav_bar";
import { logout } from '../../actions/session_actions';
import { NavLink } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.session.user,
    // playLink: <NavLink to="/play"/>,
    // historyLink: <NavLink to="/history"/>
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);

