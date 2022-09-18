/* eslint-disable @next/next/no-img-element */
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import styles from "../styles/index.module.css"
import Timeline3 from "../components/Timeline3";
import Timeline4 from "../components/Timeline4";
import RecentEvents from "../components/RecentEvents";
import UpcomingEvents from "../components/UpcomingEvents";


export default function Home() {
  return (
      <>
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
          <Timeline3 />
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
          <Timeline4 />
          <div style={{
              width:'80vw',
              margin:"auto",
              marginTop:'15vh',
              textAlign:'center'
          }}>
              < RecentEvents/>
          </div>
          <div style={{
              width:'80vw',
              margin:"auto",
              marginTop:'15vh',
              textAlign:'center'
          }}>
              < UpcomingEvents/>
          </div>
          <div style={{ height: "10vh" }}></div>
      </>
  );
}
