import { connect } from 'react-redux';
import ResultPage from './result_page';
import { receiveSingleCalculation } from "../../actions/calculation_actions";

const mSTP = state => {
  return {
    calculation: state.entities.calculations.calculations,
    fortune: state.entities.fortunes,
    users: { 
      user_1: state.session.user, 
      user_2: state.entities.users[state.entities.calculations.calculations.user_2]
    }
  };
}

const mDTP = dispatch => {
  return {
    result: calculation => dispatch(receiveSingleCalculation(calculation))
  }
}

export default connect(mSTP, mDTP)(ResultPage);