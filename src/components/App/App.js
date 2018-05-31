import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchHouseData } from '../../apiCalls/index';
import { cleanHouseData } from '../../cleaners/cleanHouseData';
import { storeHouseData } from '../../actions/index';
import { Card } from '../Card/Card';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });

    const data = await fetchHouseData();

    this.setState({
      loading: false
    });

    const cleanData = cleanHouseData(data);

    this.props.storeHouseData(cleanData);
  }

  render() {
    const houseCards = this.props.houseData.map((house, index) => {
      return (
        <Card key={index} {...house} />
      )
    })

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { houseCards }
          { this.state.loading ? <div className="loading"></div> : null }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = state => ({
  houseData: state.houseData
});

const mapDispatchToProps = dispatch => ({ 
  storeHouseData: (data) => dispatch(storeHouseData(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
