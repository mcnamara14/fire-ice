export const fetchHouseData = () => {
  const url = 'http://localhost:3001/api/v1/houses';

  return fetch(url)
    .then(response => response.json())
    .catch(error => alert(error));
};
