import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Card.css';
import { fetchSwornMembers } from '../../apiCalls';
import { cleanSwornHouseMembersData } from '../../cleaners';
import { storeSwornMembers } from '../../actions';

export class Card extends Component {
  constructor() {
    super();

    this.state = {
      displaySworn: false
    };
  }

  handleClick = async (swornMembers) => {
    const houseStored = this.houseInStore();

    if (!houseStored) {
      const swornMembersData = await fetchSwornMembers(swornMembers);
      const cleanSwornMembers = cleanSwornHouseMembersData(swornMembersData);

      this.props.storeSwornMembers(this.props.name, cleanSwornMembers);
    }

    this.toggleDisplaySworn();
  }

  houseInStore = () => {
    const houseKeys = Object.keys(this.props.houseSwornMembers);
    const houseInStore = houseKeys.find(house => house === this.props.name);

    return houseInStore;
  }

  toggleDisplaySworn = () => {
    this.setState({
      displaySworn: !this.state.displaySworn
    });
  }

  render() {
    let swornMembersList;

    const {
      name,
      founded, 
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words,
      swornMembers
    } = this.props;

    const foundedEra = founded ? founded : 'N/A';
    const allSeats = seats.map((seat, index) => {
      return (
        <p className="seat" key={index}>Seat: {seat}</p>
      );
    });
    const allTitles = titles.map((title, index) => {
      return (
        <p className="title" key={index}>Title: {title}</p>
      );
    });
    const allWeapons = ancestralWeapons.map((weapon, index) => {
      return (
        <p className="weapon" key={index}>Weapon: {weapon}</p>
      );
    });

    if (this.state.displaySworn) {
      const swornMembersInfo = this.props.houseSwornMembers[name]
        .map((member, index) => {
          return <p key={index}>{member.name}: {member.living} </p>;
        });

      swornMembersList = (
        <div className="swornMembers">
          <h4>Sworn Members</h4>
          { swornMembersInfo }
        </div>
      );
    }

    return (
      <article 
        className="houseCard" 
        onClick={() => this.handleClick({swornMembers})} 
      >
        <h2>{name}</h2>
        <h3>{words}</h3>
        <h4>Founded: {foundedEra}</h4>
        <div className="seats">
          {allSeats}
        </div>
        <div className="titles">
          {allTitles}
        </div>
        <div className="weapons">
          {allWeapons}
        </div>
        <p>Coat of Arms: {coatOfArms}</p>
        { swornMembersList }
      </article>
    ); 
  }
}

Card.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  ancestralWeapons: PropTypes.array,
  coatOfArms: PropTypes.string,
  words: PropTypes.string,
  swornMembers: PropTypes.array,
  storeSwornMembers: PropTypes.func,
  houseSwornMembers: PropTypes.object
};

export const mapDispatchToProps = (dispatch) => ({
  storeSwornMembers: (houseName, swornMembers) => {
    return dispatch(storeSwornMembers(houseName, swornMembers));
  }
});

export const mapStateToProps = (state) => ({
  houseSwornMembers: state.houseSwornMembers
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);