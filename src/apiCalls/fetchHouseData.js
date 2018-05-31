export const fetchHouseData = () => {
  const url = 'http://localhost:3001/api/v1/houses';

  return fetch(url)
    .then(data => data.json())
    .catch(error => alert(error));
};
