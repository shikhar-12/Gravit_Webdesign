import React from "react";
import CountdownTimer from "../src/hooks/CountdownTimer";

const App = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  // console.log("three" + THREE_DAYS_IN_MS);
  // console.log("Now" + NOW_IN_MS);
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return <div></div>;
};

export default App;
