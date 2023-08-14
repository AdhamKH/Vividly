import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import dynamic from "next/dynamic";

const CountDown = ({ num }) => {
  const Terminal = dynamic(
    {
      loader: () =>
        import("react-animated-numbers").then((mod) => mod.Terminal),
      render: (props, Terminal) => {
        const term = new Terminal();
        // Add logic with `term`
        return (
          <>
            <AnimatedNumbers
              includeComma
              animateToNumber={num}
              // fontStyle={{ fontSize: 40 }}
              locale="en-US"
              configs={[
                { mass: 1, tension: 220, friction: 100 },
                { mass: 1, tension: 180, friction: 130 },
                { mass: 1, tension: 280, friction: 90 },
                { mass: 1, tension: 180, friction: 135 },
                { mass: 1, tension: 260, friction: 100 },
                { mass: 1, tension: 210, friction: 180 },
              ]}
            ></AnimatedNumbers>
          </>
        );
      },
    },
    {
      ssr: false,
    }
  );
  Terminal();
  return <div></div>;
};

export default CountDown;
