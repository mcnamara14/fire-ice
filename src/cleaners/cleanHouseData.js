export const cleanHouseData = (houseData) => {
  const cleanHouseData = houseData.map(house => {
    const { name, founded, seats, titles, coatOfArms, 
      ancestralWeapons, words, swornMembers } = house;

    return {
      name,
      founded, 
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words,
      swornMembers
    };
  });
  
  return cleanHouseData;
};



