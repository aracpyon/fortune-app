import { connect } from 'react-redux';
import RandomCalc from './rand_calc';
import { fetchTwoRandomUsers } from '../../actions/calculation_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTwoRandomUsers: () => dispatch(fetchTwoRandomUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomCalc);