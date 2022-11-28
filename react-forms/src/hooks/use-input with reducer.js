import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (prevState, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: prevState.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: prevState.value,
    };
  }

  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return {
    value: "",
    isTouched: false,
  };
};

const useInput = (validateValue) => {
  const [inputState, dispatchState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchState({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchState({ type: "BLUR" });
  };

  const reset = () => {
    dispatchState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
