import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../apiCalls/index';
import { cleanHouseData } from '../../cleaners/index';
import { storeHouseData } from '../../actions/index';
import Card from '../Card/Card';

export class App extends Component {
  constructor() {
    super();
    
    this.state = {
      loading: false
    };
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
      );
    });

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
  storeHouseData: PropTypes.func,
  houseData: PropTypes.array
};

export const mapStateToProps = state => ({
  houseData: state.houseData
});

export const mapDispatchToProps = dispatch => ({ 
  storeHouseData: (data) => dispatch(storeHouseData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
