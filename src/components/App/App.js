import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchHouseData } from '../../apiCalls/index';
import { cleanHouseData } from '../../cleaners/cleanHouseData';
import { storeHouseData } from '../../actions/index';

class App extends Component {

  async componentDidMount() {
    const data = await fetchHouseData();
    const cleanData = cleanHouseData(data);

    this.props.storeHouseData(cleanData);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  storeHouseData: (data) => dispatch(storeHouseData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
