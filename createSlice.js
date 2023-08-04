import RTK from "@reduxjs/toolkit";
import { log } from "console";

const initialState = {
  count: 0,
};

const counterSlice = RTK.createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    resetCounter: (state) => {
      state.count = 0;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

//Generate Action
const { increment, decrement, incrementBy, resetCounter } =
  counterSlice.actions;

//Generate Reducer
const counterReducer = counterSlice.reducer;

//store
const store = RTK.configureStore({
  reducer: counterReducer,
});

//Dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());

store.dispatch(incrementBy(200));

console.log(store.getState());
