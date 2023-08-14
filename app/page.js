"use client";
import { GlobalStyle } from "@/style/globalStyle";
import React from "react";
import Home from "./home/page";

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
        <h1>Loading....</h1>
      ) : (
        <>
          <GlobalStyle /> <Home />
        </>
      )}
    </div>
  );
};

export default HomePage;
