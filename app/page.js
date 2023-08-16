"use client";
import { GlobalStyle } from "@/style/globalStyle";
import React from "react";
import Home from "./home/page";
import Loader from "@/components/loader";

const HomePage = () => {
  const [cssLoaded, setCssLoaded] = React.useState(false);
  React.useEffect(() => {
    // Load CSS asynchronously
    import("./home/page")
      .then(() => setCssLoaded(true))
      .catch((error) => console.error("Error loading CSS:", error));
  }, []);

  return (
    <div>
      {/*  */}
      {!cssLoaded ? (
        <Loader />
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
};

export default HomePage;
