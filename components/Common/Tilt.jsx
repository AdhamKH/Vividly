import dynamic from "next/dynamic";
import React from "react";

const Tilt = ({ children }) => {
  const DynamicHeader = dynamic(() => import("react-parallax-tilt"), {
    loading: () => <p>Loading...</p>,
  });

  return <DynamicHeader>{children}</DynamicHeader>;
};

export default Tilt;
