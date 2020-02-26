import { connect } from "react-redux";
import RegistrationForm from "./registration_form";
import { register, clearErrors } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.session
  };
};

const mDTP = dispatch => {
  return {
    register: user => dispatch(register(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(RegistrationForm);
