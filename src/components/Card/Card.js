import React, { Component } from 'react';
import './Card.css';

export const Card = (props) => {
  const {
    name,
    founded, 
    seats,
    titles,
    coatOfArms,
    ancestralWeapons,
    words
  } = props;

  const foundedEra = founded ? founded : 'N/A';
  const allSeats = seats.map((seat, index) => {
    return (
      <p className="seat"  key={index}>seat: {seat}</p>
    );
  });

  return (
    <article className="houseCard">
      <h2>{name}</h2>
      <h3>{words}</h3>
      <h4>founded: {foundedEra}</h4>
      <div className="seats">
        {allSeats}
      </div>
    </article>
  ) 
}