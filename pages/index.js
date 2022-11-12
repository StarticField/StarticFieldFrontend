/* eslint-disable @next/next/no-img-element */
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import styles from "../styles/index.module.css";
import RecentEvents from "../components/RecentEvents";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Router, useRouter } from "next/router";
import { Grid, Spacer, Text, Link } from "@nextui-org/react";

const UpcomingEvents = dynamic(() => import("../components/UpcomingEvents"), {
  ssr: false,
});
const ForStudents = dynamic(() => import("../components/homepage/forStudents"));
const ForCorporates = dynamic(() =>
  import("../components/homepage/forCorporates")
);

const Timeline3 = dynamic(() => import("../components/Timeline3"));
const Timeline4 = dynamic(() => import("../components/Timeline4"));

const Home = () => {
  const message = useRouter().query.message;
  return (
    <>
      {message ? (
        <h5 id="message" className="w3-row w3-margin-top w3-green w3-padding">
          {message}
        </h5>
      ) : null}
      <Hero />
      <div className=" startic-grey w3-row">
        <div
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/circles1.svg"
            height="100px"
            width="100px"
            layout="fill"
            alt=""
            style={{
              position: "absolute",
              bottom: "-40vh",
              left: "0",
              height: "50vh",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            width: "80vw",
            margin: "auto",
            marginTop: "15vh",
            textAlign: "center",
          }}
        >
          <UpcomingEvents />
        </div>
        <Timeline />
        <div
          style={{
            position: "relative",
          }}
        >
          <Image
            width="400px"
            height="400px"
            layout="fill"
            src="/circles3.svg"
            alt="circle"
            style={{
              position: "absolute",
              display: "block",
              width: "362px",
              height: "643px",
              top: "-90vh",
              right: "0",
            }}
          />
        </div>

        <ForStudents />
        <Timeline3 />
        <ForCorporates />
        <Timeline4 />
        <div
          style={{
            position: "relative",
          }}
        >
          <Image
            width="100px"
            height="100px"
            src="/circles2.svg"
            alt=""
           
          />
        </div>
        <div
          style={{
            width: "80vw",
            margin: "auto",
            marginTop: "15vh",
            textAlign: "center",
          }}
        >
          <RecentEvents />
        </div>
      </div>
    </>
  );
};

export default Home;
