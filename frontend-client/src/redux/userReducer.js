export default (state={}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return payload;
    case "CLEAR_CURRENT_USER":
      return {};
    case "SET_TRIPS":
      return {};
    default:
      return state;
  }
};