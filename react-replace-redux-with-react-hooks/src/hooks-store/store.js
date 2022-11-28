import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  // globalState is global, it's not recreated for every component that consumes this hook
  // it will be created once, when this file is first imported
  // and thereafter any other file that imports from the same fill will also use the same state
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    // each action should be a function which gets our current state and a payload and returns a new state as in Redux
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState }; // old global state merged with everything from the new state

    for (const listener of listeners) {
      // inform all listeners about that state change
      listener(globalState); // remember that each listener is actually a pointer to the setState function for the concrete component
    } // so whenever the state is changed, the component will be re-evaluated
  };

  useEffect(() => {
    // if a component is using only the dispatch function and doesn't care about the state
    if (shouldListen) {
      // every component which uses this useStore hook will get its own setState function
      listeners.push(setState);
    }

    /**
     * a clean up function so that we remove the listener when the component unmount
     * because with empty (setState is treated as empty because it is provided by React) dependency array
     * this effect will run only once when when component is mounted and the clean up function when the component is removed
     *
     * useEffect is a closure here and the value of setState is captured for the component that's using our custom hook
     * and therefore will be the same when the component unmounts as it is when it mounts (same reference so we can use li !=== setState)
     */
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };

    // here the empty (React guarantee that setState will never change) dependency array means that this effect
    // will only run for the components that are using our custom hook when the components mounts
  }, [setState, shouldListen]);

  return [globalState, dispatch]; // our hook returns the globalState and the dispatch function (similar as useReducer hook)
};

// A store function to which we can provide new actions (register new actons) and an initial state
export const initStore = (userActions, initialState) => {
  if (initialState) {
    // we're doing this so that we can create concrete store slices (products, auth and etc.) !!! AVOID NAME CLASHES !!!
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
