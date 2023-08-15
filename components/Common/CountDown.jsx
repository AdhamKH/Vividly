import React from "react";
// import AnimatedNumbers from "react-animated-numbers";
import dynamic from "next/dynamic";

const CountDown = ({ num }) => {
  const DynamicHeader = dynamic(() => import("react-animated-numbers"), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <DynamicHeader
      includeComma
      animateToNumber={num}
      fontStyle={{ fontSize: 40 }}
      locale="en-US"
      style={{ justifyContent: "center" }}
      configs={[
        { mass: 1, tension: 220, friction: 100 },
        { mass: 1, tension: 180, friction: 130 },
        { mass: 1, tension: 280, friction: 90 },
        { mass: 1, tension: 180, friction: 135 },
        { mass: 1, tension: 260, friction: 100 },
        { mass: 1, tension: 210, friction: 180 },
      ]}
    ></DynamicHeader>
  );
};

export default CountDown;
