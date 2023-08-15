import Image from "next/image";
import React from "react";
import imgLoader from "../../assets/images/loader.png";
import { LoaderStyle } from "./LoaderStyle";
const Loader = () => {
  return (
    <LoaderStyle>
      <div className="preloader">
        <Image width="60" height="60" src={imgLoader} alt="" />
      </div>
    </LoaderStyle>
  );
};

export default Loader;
