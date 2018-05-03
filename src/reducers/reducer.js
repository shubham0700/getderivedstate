export function reducerfun(state = { user: {} }, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("action", action);
      return {
        ...state,
        shubham: action.data
      };
    default:
      return state;
  }
}
