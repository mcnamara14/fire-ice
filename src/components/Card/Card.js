import React, { Component } from 'react';
import './Card.css';
import { fetchSwornMembers } from '../../apiCalls/index';
import { cleanSwornHouseMembersData } from '../../cleaners/index';

export class Card extends Component {
  constructor() {
    super();

    this.state = {
      swornMembers: []
    }
  }

  handleClick = async (swornMembers) => {
    if (!this.state.swornMembers.length) {
      const membersData = await fetchSwornMembers(swornMembers);
      const swornMembersData = cleanSwornHouseMembersData(membersData);

      this.setState({
        swornMembers: swornMembersData 
      })
    } else {
      this.setState({
        swornMembers: []
      })
    }
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

    if (this.state.swornMembers) {
      swornMembersList = this.state.swornMembers.map((member, index) => {
        return <p>{member.name}: {member.living} </p>
      })
    }

    return (
      <article className="houseCard" onClick={() => this.handleClick({swornMembers})} >
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
        <div className="swornMembers">
          {swornMembersList}
        </div>
      </article>
    ); 
  }
};