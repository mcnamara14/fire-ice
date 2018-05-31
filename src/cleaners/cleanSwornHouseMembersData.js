export const cleanSwornHouseMembersData = (membersData) => {
  const cleanMembersData = membersData.map(member => {
    const { name, died } = member;
    const living = died ? died : 'Alive';

    return {
      name,
      living};
  });

  return cleanMembersData;
};