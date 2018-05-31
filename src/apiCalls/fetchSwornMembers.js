import { fetchHouseData } from ".";

export const fetchSwornMembers = (swornMembers) => {
  const allSwornMembers = swornMembers.swornMembers;
  const memberIds = allSwornMembers.map(member => {
    return member.substring(member.lastIndexOf("/") + 1)
  });

  console.log(memberIds)

  const fetchPromises = memberIds.map(id => {
    return fetch(`http://localhost:3001/api/v1/character/${id}`)
      .then(response => response.json());
  });

}
