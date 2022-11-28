import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // since forwards is not defined insede of the
  // effect our otside our custom hook (instead it is a value that we get as a parameter)
  // we should register it as a dependency, so that when it changes, this effect will re-run

  return counter;
};

export default useCounter;
