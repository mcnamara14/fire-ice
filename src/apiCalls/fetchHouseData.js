export const fetchHouseData = () => {
  const url = 'http://localhost:3001/api/v1/houses';

  fetch(url)
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
