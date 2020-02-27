import React from "react";
import './sessions.scss';
import { NavLink } from 'react-router-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      birthDate: "",
      zodiac: "",
      kids: "",
      marriage: "",
      personality: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state).then(() => {
      this.props.history.push('/login');
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  updateSelect(field) {
    return e => {
      return this.setState({
        [field]: e.currentTarget.selectedOptions[0].value
      });
    };
  }

  render() {
    return (
      <div className="signup-container">
        <NavLink className="logo-link" to="/">
          <img src="/fortune_couple.PNG" alt="logo" className="main-logo" />
        </NavLink>
        <h2>Sign up to crack your love fortune.</h2>
        <p className="other">
          Already have an account?
          <NavLink className="other-link" to="/login">
            Log in here
          </NavLink>
        </p>
        <form className="signup-form" onSubmit={this.handleSubmit}>
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
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <input
            className="input-field"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Username"
          />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
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
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <input
            className="input-field"
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
          />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <input
            type="date"
            className="input-field"
            onChange={this.update("birthDate")}
          />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <div className="">
            <select
              className="input-field"
              onChange={this.updateSelect("kids")}
            >
              <option value="">Do you want kids?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <div className="">
            <select
              className="input-field"
              onChange={this.updateSelect("marriage")}
            >
              <option value="">Do you want to get married?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <br />
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <div className="">
            <select
              className="input-field"
              onChange={this.updateSelect("personality")}
            >
              <option value="">Where is your ideal place to be?</option>
              <option value="1">Indoors</option>
              <option value="0">Outdoors</option>
            </select>
          </div>
          <div className="fortune-style">
            <div className="style-color"></div>
            <div className="style-color"></div>
          </div>
          <br />
          <div className="signup-button-div">
            <button className="signup-button">sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
