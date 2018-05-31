export const storeSwornMembers = (houseName, swornMembers) => ({
  type: 'STORE_SWORN_MEMBERS',
  houseName,
  swornMembers
});