import React, { Component } from 'react';
import './Card.css';
import { fetchSwornMembers } from '../../apiCalls/index';
import { cleanSwornHouseMembersData } from '../../cleaners/index';

export const handleClick = async (swornMembers) => {
  const membersData = await fetchSwornMembers(swornMembers);
  const cleanMembersData = cleanSwornHouseMembersData(membersData);
}

export const Card = (props) => {
  const {
    name,
    founded, 
    seats,
    titles,
    coatOfArms,
    ancestralWeapons,
    words,
    swornMembers
  } = props;

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

  return (
    <article className="houseCard" onClick={() => handleClick({swornMembers})} >
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
    </article>
  ); 
};