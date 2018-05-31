export const cleanHouseData = (houseData) => {
  const cleanHouseData = houseData.map(house => {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = house;

    return {
      name,
      founded, 
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words
    };
  });

  return cleanHouseData;
};



