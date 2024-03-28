const { createStore } = require("redux");

// Initial state
const initialState = {
  count: 0,
};

// Actions: increment, decrement, reset, increaseByAmount

// action increment
{
  type: "INCREMENT";
}

// increment action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

// decrement action creator
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

// reset action creator
const resetAction = () => {
  return {
    type: "RESET",
  };
};

// increase by amount  action creator
const increaseByAmountAction = (anyAmount) => {
  return {
    type: "INCREASE_BY_AMOUNT",
    payload: anyAmount,
  };
};

// Reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREASE_BY_AMOUNT") {
    return {
      count: state.count + action.payload,
    };
  }
};

// Store
const store = createStore(counterReducer);

// subscribe to store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch action
// increment
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

// decrement
store.dispatch(decrementAction());

// reset
store.dispatch(resetAction());

// increaseByAmount
store.dispatch(increaseByAmountAction(10));
