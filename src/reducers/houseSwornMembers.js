export const houseSwornMembers = (state = {}, action ) => {
  switch (action.type) {
  case 'STORE_SWORN_MEMBERS':
    return {...state, [action.houseName]: action.swornMembers};
  default:
    return state;
  }
}