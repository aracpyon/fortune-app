import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        demoUser: {
            email: 'demo@gmail.com',
            password: 'password123'
        }
    };
};

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(LoginForm);