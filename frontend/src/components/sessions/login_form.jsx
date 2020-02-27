import React from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors(field) {
    return (
      <li className="errors" >
        {this.props.errors[field]}
      </li>
    );
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="login-container">
        <NavLink className="logo-link" to="/">
          <img src="/fortune_couple.PNG" alt="logo" className="main-logo" />
        </NavLink>
        <h2>See what fortunes await you today.</h2>
        <p className="other">
          Don't have an account?
          <NavLink className="other-link" to="/signup">
            Sign up here
          </NavLink>
        </p>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <input
            className="input-field"
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          {this.renderErrors("email")}
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <input
            className="input-field"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          {this.renderErrors("password")}
          <br />
          <div className="signup-button-div ">
            <button className="signup-button">log in</button>
          </div>
          {/* <div className="signup-button-div">
          </div> */}
        </form>
        <div className="login-form delete-padding">
          <button
            onClick={() => this.props.login(this.props.demoUser)}
            className="demo-button"
          >
            Demo User
          </button>
        </div>
      </div>
    );
  }

}

export default LoginForm;
