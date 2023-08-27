import React from "react";

const dataFetching = async (api) => {
  const res = await fetch(api);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res;
};

export default dataFetching;
