import React from 'react';
import './rand_calc.css';

class RandCalc extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTwoRandomUsers();
  }

  render(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

export default RandCalc;