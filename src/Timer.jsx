import {
  useState,
  useEffect
} from "react";

function Timer() {
  const [seconds, setSeconds] =
    useState(0);

  useEffect(() => {

    const intervalId =
      setInterval(() => {

        setSeconds(prev =>
          prev + 1
        );

      }, 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, []);

  return (
    <h1>
      Seconds: {seconds}
    </h1>
  );
}

export default Timer;