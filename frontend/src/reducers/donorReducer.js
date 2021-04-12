const donorReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DONOR':
      return state.concat([action.data]);
    case 'DELETE_DONOR':
      return state.filter((donor) => donor.id !== action.id);
    case 'EDIT_DONOR':
      return state.map((donor) =>
        donor.id === action.id ? { ...donor, editing: !donor.editing } : donor
      );
    case 'UPDATE':
      return state.map((donor) => {
        if (donor.id === action.id) {
          return {
            ...donor,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !donor.editing,
          };
        } else {
          return donor;
        }
      });
    default:
      return state;
  }
};
export default donorReducer;
