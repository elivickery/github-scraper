import React, { Component } from 'react';
import User from '../components/User';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      user: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value !== '') {
      this.setState({user: <User key={this.state.value} username={this.state.value}/>});
    }
  }

  render() {
    return (
      <div>
        <div id="form">
          <h1>Enter a GitHub username.</h1>
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="GO" />
          </form>
        </div>

        {this.state.user}
      </div>
    );
  }
}

export default Form;
