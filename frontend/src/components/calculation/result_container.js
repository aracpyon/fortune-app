import { connect } from 'react-redux';
import ResultPage from './result_page';
import { receiveSingleCalculation } from "../../actions/calculation_actions";

const mSTP = state => {
  // debugger
  return {
    calculation: state.entities.calculations.calculations,
    fortune: { sentence: "Ew, bad match Ok let's make the sentence long"},
    users: { 
      user_1: state.session.user, 
      user_2: state.session.user
    }
  };
}

const mDTP = dispatch => {
  return {
    result: calculation => dispatch(receiveSingleCalculation(calculation))
  }
}

export default connect(mSTP, mDTP)(ResultPage);