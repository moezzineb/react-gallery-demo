const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_PICS":
      return {
        ...state,
        pics: action.payload,
      };
    case "ADD_PIC":
      return {
        ...state,
        pics: state.pics.concat(action.payload),
      };
    case "REMOVE_PIC":
      return {
        ...state,
        pics: state.pics.filter((pic) => pic.id !== action.payload),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_AUTH":
      return {
        ...state,
        auth: !action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
