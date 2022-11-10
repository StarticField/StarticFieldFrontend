import {
  Grid,
  Spacer,
  Text,
  Image,
  Link,
  Card,
  Row,
  Col,
  Button,
} from "@nextui-org/react";
import styles from "../styles/hero.module.css";
import TimelineMockPitch from "../components/TimelineMockPitch";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";

import axiosInstance from "../components/axiosAPI";
const list = [
  {
    title: "Rakhi Pal",
    img: "rakhi_pal.jpeg",
    link: "https://www.linkedin.com/in/rakhipal/",
    designation: " Co-founder & COO at EventBeep",
  },
  {
    title: "Saurabh Mangrulkar",
    img: "saurabh_mangrulkar.png",
    link: "https://www.linkedin.com/in/ashutosh-bisht-050287181/",
    designation: " Co-founder & CEO at EventBeep",
  },

  {
    title: "Shamik Guha",
    img: "shamik_guha.jpeg",
    link: "https://www.linkedin.com/in/shamik-guha/",
    designation: " Co-founder & CeO at Alter",
  },
];


export default function CTOHunt() {
  const mes = useRouter().query.message;
  const [message, setMessage] = useState(mes);
  const [status, setStatus] = useState("unavailable");
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const enroll = () => {
    try {
      axiosInstance
        .post("/enroll-in-event/", {
          username: localStorage.getItem("username"),
          event: "mockpitch",
        })
        .then((response) => {
          if (response.status == 200) {
            console.log("enrolled");
            router.push({
              pathname: "/embed",
              query: { message: "Successfully enrolled in MockPitch !" },
            });
            setStatus("enrolled");
          } else {
            setMessage("Successfully enrolled in CTO Hunt !");
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
            setStatus(response.data.mockpitch);
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
      <Grid.Container className={styles.main}>
        <Grid xs={12} md={5.7}>
          <div className={styles.heroText}>
            <Text
              h1
              weight={"semibold"}
              css={{
                margin: "0",
                padding: "0",
              }}
            >
              Mock Pitch 2022
            </Text>
            <Text
              h1
              weight={"semibold"}
              css={{
                margin: "0",
                padding: "0",
              }}
            >
              <e className="w3-text-blue"> 15 Nov Onwards</e>
            </Text>
            <h4>
              This event is for aspiring Shark Tank pitchers who want to
              understand sharks and how they evaluate a pitch better. Our
              eligible participants are anyone who dreams to win the show. This
              is their first chance to pitch their ideas to previous season
              winners and seek feedback, suggestions, and experience about
              working with various sharks.
            </h4>
            <Spacer x={4} />
            {authenticated ? (
              status === "enrolled" ? (
                <a
                  href={"./dashboard"}
                  className="w3-round-xxlarge w3-button w3-cyan w3-large w3-margin"
                >
                  View Progress &gt;
                </a>
              ) : (
                <button
                  onClick={enroll}
                  className="w3-round-xxlarge w3-indigo w3-button w3-large w3-margin"
                >
                  Enroll Now
                </button>
              )
            ) : (
             
        <Button shadow color="gradient" auto>
        Enroll Now
        </Button>

            )}
          </div>
        </Grid>
        <div className="w3-half">
          <Image src="cover2.webp" alt=""></Image>
        </div>
      </Grid.Container>
      <div className="startic-cyan w3-row w3-padding ">
        <div className="w3-third w3-padding">
          <Image src="heroCover.webp" alt=""></Image>
        </div>
        <div className="w3-padding w3-half">
          <Text
            h1
            className="w3-margin w3-text-cyan"
            weight={"semibold"}
            css={{
              margin: "0",
              padding: "0",
            }}
          >
            Desired Outcomes
          </Text>
          <div className="w3-margin">
            <p className="w3-large">
              The winners of the Mock Pitch event will be provided with the
              opportunity to speak to past season winners and learn from them
              what it takes to get funded at such platform. Winners of this
              event will get a chance to speak with Shark Tank season 1 funded
              startup founders, one-on-one to clear their doubts and perfect
              their pitches, with the goal of increasing their chances of
              success.
            </p>
          </div>
        </div>
      </div>
      <TimelineMockPitch />
      <Spacer y={3} />
      <Text
        h1
        className={styles.teamHeading}
        css={{
          textGradient:
            "to right, #3361AD 45%,#6061AC 49%,#39B8C8 50%,#6AC5AA 53%",
          textAlign: "center",
        }}
      >
        Judges
      </Text>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={4} key={index}>
            <Card isPressable isHoverable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={"340px"}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Col>
                    <Text b>{item.title}</Text>
                  </Col>

                  <Text>{item.designation}</Text>
                  <Link target={"_blank"} href={item.link} color="text">
                    <Image className={styles.socialIcons} src="/linkedin.svg" />
                  </Link>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <div
        style={{
          position: "relative",
        }}
        className="w3-row w3-margin w3-black w3-center"
      >
        <h3>For more information</h3>
        <p className="w3-padding w3-large">
          Contact us through{" "}
          <b className="w3-text-blue">events.team@starticfield.com</b>
        </p>
      </div>
      <Spacer y={2} />
    </>
  );
}
