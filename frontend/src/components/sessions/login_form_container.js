import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(LoginForm);