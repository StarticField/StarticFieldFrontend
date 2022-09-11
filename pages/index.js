/* eslint-disable @next/next/no-img-element */
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import Image from "next/image";
import Timeline from "../components/Timeline";
import styles from "../styles/index.module.css"


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
          className={styles.groupOne}
        ></img>
      </div>
        <div
            style={{
                position: "relative"
            }}
        >
            <img
                src="/circles3.svg"
                alt=""
                className={styles.groupTwo}
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
          className={styles.groupThree}
        ></img>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
          <img
              alt=""
              className={styles.groupFour}
          />
      </div>
      <div className={styles.groupFourSpace}></div>
      <Timeline />
      <div
        style={{
          position: "relative",
        }}
      >
          <img
              className={styles.groupFive}
              alt=""

          />      </div>
      <div className={styles.groupFiveSpace}></div>
      <Timeline />
      <div style={{ height: "10vh" }}></div>
    </Layout>
  );
}
