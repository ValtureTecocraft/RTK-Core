import toolkit from "@reduxjs/toolkit";

//InitialState
const initialState = {
  counter: 0,
};

//Create Action
const increment = toolkit.createAction("INCREMENT");
const decrement = toolkit.createAction("DECREMENT");
const resetCounter = toolkit.createAction("RESET");

/** Customize Create Action : to pass parameters */
const incrementBy = toolkit.createAction("INCREMENT_BY", (amount, user) => {
  return {
    payload: {
      amount,
      user,
      id: toolkit.nanoid(), //for ramdom string generator
    },
  };
});

// console.log(incrementBy(20, "Smit"));

//Create Reducer

//     Method 1: Bulder callback notation:- (RECOMENDED)
const counterSlice = toolkit.createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });
  builder.addCase(decrement, (state) => {
    state.counter -= 1;
  });
  builder.addCase(resetCounter, (state) => {
    state.counter = 0;
  });
  builder.addCase(incrementBy, (state, action) => {
    state.counter += action.payload.amount;
  });
});

//     Method 2: map object notation:-
const counterSlice2 = toolkit.createAction(initialState, {
  [increment]: (state) => {
    state.counter += 1;
  },
  [decrement]: (state) => {
    state.counter -= 1;
  },
  [resetCounter]: (state) => {
    state.counter = 0;
  },
  [incrementBy]: (state, action) => {
    state.counter += action.payload.amount;
  },
});

//Store
const store = toolkit.configureStore({
  reducer: counterSlice,
});

//dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());

store.dispatch(incrementBy(100, "Smit"));

console.log(store.getState());
