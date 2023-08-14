"use client";
import Image from "next/image";
import React from "react";
import counter from "../../assets/images/shapes/counter-one-pattern.png";
import { Grid } from "@mui/material";
import { CounterStyle } from "./CounterStyle";
import CountDown from "../Common/CountDown";

const CounterOne = () => {
  return (
    <CounterStyle>
      <section className="counter-one">
        <div className="counter-one__inner">
          <div className="counter-one-pattern">
            <Image
              src={counter}
              objectFit="cover"
              objectPosition="center"
            ></Image>
          </div>
          <div className="counter-one__box-one"></div>
          <div className="counter-one__box-two"></div>
          <div className="container">
            <Grid container columns={12}>
              <Grid item xs={12}>
                <ul className="list-unstyled counter-one__list">
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-recommend"></span>
                    </div>
                    <h3 className="odometer">
                      <CountDown num={2000}></CountDown>
                    </h3>
                    <p className="counter-one__text">Projects Completed</p>
                  </li>
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-recruit"></span>
                    </div>
                    <h3 className="odometer" data-count="880">
                      <CountDown num={3000}></CountDown>
                    </h3>
                    <p className="counter-one__text">Active Clients</p>
                  </li>
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-customer"></span>
                    </div>
                    <h3 className="odometer" data-count="9280">
                      <CountDown num={3500}></CountDown>
                    </h3>
                    <p className="counter-one__text">Satisfied Clients</p>
                  </li>
                  <li
                    className="counter-one__single wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="counter-one__icon">
                      <span className="icon-graphic-designer"></span>
                    </div>
                    <h3 className="odometer" data-count="380">
                      <CountDown num={4500}></CountDown>
                    </h3>
                    <p className="counter-one__text">Expert Teams</p>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </CounterStyle>
  );
};

export default CounterOne;
