/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import Image from "next/image";
import Timeline from "../components/Timeline";
import Group1 from "../components/Group1";
import Group2 from "../components/Group2";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <div
        style={{
          position: "relative"
      }}
      >
        <img
          src="/circles1.svg"
          alt=""
          style={{
            position: "absolute",
            bottom: "-40vh",
            left: "0",
            height: "80vh",
            display: "block",
          }}
        ></img>
      </div>
      <Timeline />
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src="/circles2.svg"
          alt=""
          style={{
            position: "absolute",
            bottom: "-10vh",
            right: "2vw",
            height: "35vh",
            display: "block",
          }}
        ></img>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <Group1></Group1>
      </div>
      <div style={{ height: "35vw" }}></div>
      <Timeline />
      <div
        style={{
          position: "relative",
        }}
      >
        <Group2></Group2>
      </div>
      <div style={{ height: "100vh" }}></div>
      <Timeline />
    </Layout>
  );
}
