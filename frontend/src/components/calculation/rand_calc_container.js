import { connect } from 'react-redux';
import RandomCalc from './rand_calc';
import { fetchTwoRandomUsers, createCalculation } from '../../actions/calculation_actions';

const mapStateToProps = state => {
  return {
    twoUsers: state.entities.calculations.randomUsers,
    fortuneCookie: state.entities.calculations.calculations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTwoRandomUsers: () => dispatch(fetchTwoRandomUsers()),
    createCalculation: (twoUsers) => dispatch(createCalculation(twoUsers)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomCalc);