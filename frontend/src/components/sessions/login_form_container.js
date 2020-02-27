import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session
    };
};

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(LoginForm);