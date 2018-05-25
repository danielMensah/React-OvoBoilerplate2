import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from '../actions';
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.testAction();
  }

  render() {
    const { testing } = this.props;
    console.log(testing.word);

    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    );
  }
}
const mapStateProps = ({testing}) => ({
  testing
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ testAction }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(App);
