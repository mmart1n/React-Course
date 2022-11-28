import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (prevState = initialState, action) => {
  // NEVER MUTATE THE STATE, INSTEAD RETURN A BRAND NEW OBJECT
  if (action.type === "INCREMENT") {
    return {
      counter: prevState.counter + 1,
      showCounter: prevState.showCounter,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: prevState.counter + action.amount,
      showCounter: prevState.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: prevState.counter - 1,
      showCounter: prevState.showCounter,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      showCounter: !prevState.showCounter,
      counter: prevState.counter,
    };
  }

  return prevState;
};

const store = createStore(counterReducer);

export default store;
