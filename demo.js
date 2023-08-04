//import
import { createStore } from "redux";
// const { createStore } = require("redux");

//initialize state
const initialState = {
  bal: 5000,
};

//reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSITE":
      return {
        ...state,
        bal: state.bal + action.value,
      };
    case "WITHDRAW":
      return {
        ...state,
        bal: state.bal - action.value,
      };
    default:
      state;
  }
};

//store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

//action
store.dispatch({ type: "DEPOSITE", value: 1000 });
store.dispatch({ type: "WITHDRAW", value: 4000 });
