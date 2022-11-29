/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "../styles/index.module.css";
import RecentEvents from "../components/RecentEvents";
import { Router, useRouter } from "next/router";
import { Grid, Spacer, Text, Link } from "@nextui-org/react";

import axiosInstance from "../components/axiosAPI";
import Image from "next/image";

export default function Home() {
  const message = useRouter().query.message;
  const [ctoHuntStatus, setCTOHuntStatus] = useState("unavailable");
  const [authenticated, setAuthenticated] = useState(false);
  const [mockpitchStatus, setMockpitchStatus] = useState("unavailable");
  const router = useRouter();

  const enroll = (e) => {
    try {
      axiosInstance
        .post("/enroll-in-event/", {
          username: localStorage.getItem("username"),
          event: e.target.value,
        })
        .then((response) => {
          if (response.status == 200) {
            console.log("enrolled");
            if (e.target.value === "mockpitch") {
              router.push({
                pathname: "/embed",
                query: { message: "Successfully enrolled in MockPitch !" },
              });
            } else {
              router.push({
                pathname: "https://docs.google.com/forms/d/e/1FAIpQLSeKiV6QXyqi-7aeLFBW94Hmyz2czVB4fMlZ4UI3BeJZRxpLZQ/viewform?usp=sf_link",
                query: { message: "Successfully enrolled in CTO Hunt !" },
              });
            }
          } else {
            setError(response);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
      getEnrolledStatus();
    }
  }, []);
  const getEnrolledStatus = () => {
    try {
      axiosInstance
        .get("/enrolled-status/", {
          params: { username: localStorage.getItem("username") },
        })
        .then((response) => {
          if (response.status == 200) {
            setCTOHuntStatus(response.data.ctohunt);
            setMockpitchStatus(response.data.mockpitch);
            console.log(response);
          } else {
            setError(response);
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      {message ? (
        <h5 id="message" className="w3-row w3-margin-top w3-green w3-padding">
          {message}
        </h5>
      ) : null}
      <h2 className="w3-margin w3-center">Latest Events</h2>
      <div
        style={{
          position: "relative",
        }}
      >
        {/* <img src="/circles3.svg" alt="" className={styles.groupTwo}/> */}
      </div>

      <div className="w3-row w3-margin-top w3-margin-bottom ">
        <div className="w3-third w3-padding">
          <Image
            src="/allIndiaHunt.webp"
            width="100px"
            height="100px"
            layout="responsive"
            className="w3-round-large"
            alt=""
          />
        </div>
        <div className="w3-twothird w3-display-container">
          <Text
            h1
            className="w3-margin"
            weight={"semibold"}
            css={{
              marginTop: "50",
              padding: "0",
            }}
          >
            All India CTO Hunt
          </Text>
          <h4 className="w3-margin w3-text-grey">
            If you&#39;re a student with technical skills and an entrepreneurial
            mindset, then this is the perfect competition for you! You&#39;ll
            have the chance to join an ambitious student-led startup as a Tech
            Cofounder or CTO and win exciting prizes for sure - so don&#39;t
            miss out and register now!
          </h4>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKiV6QXyqi-7aeLFBW94Hmyz2czVB4fMlZ4UI3BeJZRxpLZQ/viewform?usp=sf_link"
            className="w3-round-xxlarge w3-indigo w3-button w3-large w3-margin"
          >
            Get registration link
          </a>
          <a
            href="./cto-hunt"
            className="w3-button  w3-round-xlarge w3-text-indigo w3-padding w3-large"
          >
            <e className="w3-left ">More details</e>
            <e className="w3-right">&gt;</e>
          </a>
        </div>
      </div>
      <div className="w3-row w3-margin-top w3-margin-bottom ">
        <div className="w3-third w3-padding">
          <Image
            src="/form.png"
            className="w3-round-large"
            width="100px"
            height="100px"
            layout="responsive"
            alt=""
          />
        </div>
        <div className="w3-twothird w3-display-container">
          <Text
            h1
            className="w3-margin"
            weight={"semibold"}
            css={{
              marginTop: "50",
              padding: "0",
            }}
          >
            Mock Pitch
          </Text>
          <h4 className="w3-margin w3-text-grey">
            This event is for aspiring Shark Tank pitchers who want to
            understand sharks and how they evaluate a pitch better. Our eligible
            participants are anyone who dreams to win the show. This is their
            first chance to pitch their ideas to previous season winners and
            seek feedback, suggestions, and experience about working with
            various sharks.
          </h4>
          <a
            href="https://forms.gle/i6qiusGYKukG2kuX9"
            className="w3-round-xxlarge w3-indigo w3-button w3-large w3-margin"
          >
            Enroll now
          </a>
          <a
            href="./mock-pitch"
            className="w3-button w3-round-xlarge w3-text-indigo w3-padding w3-large"
          >
            <e className="w3-left ">More details</e>
            <e className="w3-right">&gt;</e>
          </a>
        </div>
      </div>
      <div className="w3-row w3-margin-top w3-margin-bottom">
        <div className="w3-third w3-padding">
          <Image
            width="100px"
            height="100px"
            layout="responsive"
            src="/big5.jpg"
            className="w3-round-large"
            alt=""
            />
        </div>
        <div className="w3-twothird w3-display-container">
          <Text
            h1
            className="w3-margin"
            weight={"semibold"}
            css={{
              marginTop: "50",
              padding: "0",
            }}
          >
            Big 5 Problems
          </Text>
          <h4 className="w3-margin w3-text-grey">
            Get the top 5 best problems in the industry to solve for and explore
            million dollar startup opportunities.
          </h4>
          <a
            href="https://discord.com/invite/uWxKXJRpKS"
            className="w3-round-xxlarge w3-purple w3-button w3-large w3-margin"
          >
            Join Discord to get the link
          </a>
        </div>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        {/* <img src="/circles2.svg" alt="" className={styles.groupThree}/> */}
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
      <div style={{ height: "10vh" }}></div>
    </>
  );
}
