import React from "react";
import "./sessions.scss";

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
    debugger
    this.props.register(this.state);
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

  updateSelect(field){
    return e =>{
      return this.setState({
        [field]: e.currentTarget.selectedOptions[0].value
      })
    }
  }

  render() {
    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <input
            className="input-field"
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <br />
          <input
            className="input-field"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Username"
          />
          <br />
          <input
            className="input-field"
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <br />
          <input
            className="input-field"
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
          />
          <br />
          <input type="date" className="input-field" onChange={this.update('birthDate')}/>
          <br />
          <div className="">
            <select className="input-field" onChange={this.updateSelect('kids')}>
              <option value="">Do you want kids?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <br />
          <div className="">
            <select className="input-field" onChange={this.updateSelect('marriage')}>
              <option value="">Do you want to get married?</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <br />
          <div className="">
            <select className="input-field" onChange={this.updateSelect('personality')}>
              <option value="">Where is your ideal place to be?</option>
              <option value="1">Indoors</option>
              <option value="0">Outdoors</option>
            </select>
          </div>
          <br />
          <div className="signup-button-div">
            <button className="signup-button">SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
