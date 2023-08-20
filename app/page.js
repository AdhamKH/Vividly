"use client";
import React from "react";
import Loader from "@/components/loader";
import MyHome from "./myHome/page";

const HomePage = () => {
  const [cssLoaded, setCssLoaded] = React.useState(false);
  React.useEffect(() => {
    // Load CSS asynchronously
    import("./myHome/page")
      .then(() => setCssLoaded(true))
      .catch((error) => console.error("Error loading CSS:", error));
  }, []);

  return (
    <div>
      {!cssLoaded ? (
        <Loader />
      ) : (
        <>
          <MyHome />
        </>
      )}{" "}
    </div>
  );
};

export default HomePage;
