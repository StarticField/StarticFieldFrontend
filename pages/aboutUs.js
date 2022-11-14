/* eslint-disable @next/next/no-img-element */
import style from "../styles/aboutUs.module.css";
import { Card, Grid, Link, Row, Text } from "@nextui-org/react";
import Image from "next/image";

const list = [
  {
    title: "Ashutosh Bisht",
    designation:'CTO @ Startic Field',
    img: "AshutoshBisht.png",
    link: "https://www.linkedin.com/in/ashutosh-bisht-050287181/",
  },
 
  {
    title: "Priyansh Negi",
    designation:'CEO @ Startic Field',
    img: "PriyanshNegi.jpg",
    link: "https://www.linkedin.com/in/priyanshnegi/",
  },

  {
    title: "Shubhanshu Rao",
    designation:'CO-Founder @ Startic Field',
    img: "ShubhanshuRao.jpeg",
    link: "https://www.linkedin.com/in/shubhanshu-rao-b77704223/",
  },
  {
    title: "Aryan Kataria",
    designation:'Founding Member @ Startic Field',
    img: "/AryanKataria.jpeg",
    link: "https://www.linkedin.com/in/whoaryanraj",
  },


  {
    title: "Ankit Gupta",
    designation:'Founding Member @ Startic Field',
    img: "AnkitGupta.png",
    link: "https://www.linkedin.com/in/gupta-ankit2",
  },
];


export default function AboutUs() {
  return (
    <div className={style.main}>
      <p className={style.mainText}>
        Startic Field is a company which aims to bring together 2 powerful
        stakeholders to fuel the startup revolution in India.
        <br />
        <br />
        On one hand are student entrepreneurs who have the energy, time and
        passion to build path breaking startups. But who have been hustling with
        the lack of experience and even small amounts of capital.
        <br />
        <br />
        On the other hand is the huge community of experienced professionals,
        who have long nurtured a passion to startup. They have years of
        experience and small amounts of capital but do not have the time and
        availability due to personal or family constraints.
        <br />
        <br />A simple match of complementary strengths to create an
        electrifying effect!
      </p>
      <Text
        h1
        className={style.teamHeading}
        css={{
          textGradient:
            "to right, #3361AD 45%,#6061AC 49%,#39B8C8 50%,#6AC5AA 53%",
        }}
      >
        Our Team
      </Text>

      <div
        style={{
          position: "relative",
        }}
        className={style.backgroundTeam}
      ></div>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={12} sm={4} key={index}>
            <Card className={style.card} isPressable isHoverable>
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
                  <Text align="left" b>{item.title} <br />{item.designation}</Text>
                  <Link target={"_blank"} href={item.link} color="text">
                    <Image className={style.socialIcons} width="25px" height="25px" src="/linkedin.svg" />
                  </Link>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <Text
        h1
        className={style.teamHeading}
        css={{
          textGradient:
            "to right, #3361AD 40%,#6061AC 50%,#39B8C8 60%,#6AC5AA 70%",
        }}
      >
        Our intellectual mentor
      </Text>
      <div className={style.mentor}>
        <div className={style.mentorText}>
          <Text className={style.mentorName} weight={"semibold"}>
            Mr. N R Narayana Murthy
          </Text>
          <Text className={style.mentorJob} weight={"light"}>
            Founder of Infosys
          </Text>
        </div>
        <Image
          src={"/narayana-pti.webp"}
          width="350px"
          height="350px"
          layout="intrinsic"
        
        />
      </div>
    </div>
  );
}
