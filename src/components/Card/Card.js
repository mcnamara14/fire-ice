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

  return (
    <article className="houseCard">
      <h2>{name}</h2>
      <h3>
    </article>
  )
}