"use client";

import React from "react";
import { WeCareStyle } from "./WeCareStyle";
import weCareImg from "../../assets/images/resources/we-care-img.jpg";
import Image from "next/image";
const WeCare = () => {
  return (
    <WeCareStyle>
      <section class="we-care">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="we-care__inner">
                <div class="we-care__img">
                  <Image src={weCareImg} alt="" width="100%" height="100%" />
                </div>
                <div class="we-care__content">
                  <h3 class="we-care__title">We Care About Business Growths</h3>
                  <p class="we-care__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WeCareStyle>
  );
};

export default WeCare;
