/* eslint-disable @next/next/no-img-element */
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import styles from "../styles/index.module.css"
import Timeline3 from "../components/Timeline3";
import Timeline4 from "../components/Timeline4";
import RecentEvents from "../components/RecentEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import {Router, useRouter} from "next/router"; 
import {Grid, Spacer, Text, Image, Link} from "@nextui-org/react";


export const config = {
    unstable_runtime:false
  }
 const Home = () => {
    const message = useRouter().query.message;
    return (
        <>
            {message?
                <h5 id="message" className="w3-row w3-margin-top w3-green w3-padding" >
                    {message}
                </h5>
                :
                null}
            <Hero></Hero>
            <div className=" startic-grey w3-row">
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
            <div style={{
                width:'80vw',
                margin:"auto",
                marginTop:'15vh',
                textAlign:'center'
            }}>
                < UpcomingEvents/>
            </div>
            <Timeline />
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
            
            <div className="w3-row ">
                <div className="w3-third w3-padding">
                    <Image src="banner4.webp" className="w3-round-xlarge" alt=""></Image>
                </div>
                <div className="w3-twothird w3-display-container">
                    <Text
                        h1
                        className="w3-margin"
                        weight={'semibold'}
                        css={{
                        marginTop:"50",
                        padding:'0',
                        }}
                    >
                        Are you a student ? Do you want to convert your idea into a real startup ?
                    </Text>
                    <h4 className="w3-margin w3-text-grey">Every big company starts off with an idea and few people with the commitment to make it into a reality. And if you are a student or a group of students with these two things, Startic Field is the destination you should go to next. This is the sandbox where you work on your ideas and build them into successful business by following the below journey. </h4>
                    <h4 className="w3-margin w3-text-grey">Even if you do not have ideas but have the passion to join and contribute to a campus based startup, you need to create your profile on Startic Field.</h4>
                    <a href="./forStartups" className="w3-half w3-round-xlarge w3-button w3-padding w3-text-green w3-large" ><e className="w3-left ">For student startups </e><e className="w3-right" >&gt;</e></a>
                    <a href="./forStudents" className="w3-half w3-button w3-round-xlarge w3-text-blue w3-padding w3-large" ><e className="w3-left ">For students</e><e className="w3-right" >&gt;</e></a>
                </div>
            </div>
            <Timeline3 />
            <div className="w3-row ">
                <div className="w3-twothird w3-display-container">
                    <Text
                        h1
                        className="w3-margin"
                        weight={'semibold'}
                        css={{
                        marginTop:"50",
                        padding:'0',
                        }}
                    >
                        Are you a corporate professional ? Do you have an idea but no time to work on it ?
                    </Text>
                    <h4 className="w3-margin w3-text-grey">India is the country with the 2nd highest number of Unicorns after USA. However, if we take into consideration the population of both countries, India has only utilized 6% of its startup potential.
                            This is because a vast population of experienced and talented people with entrepreneurial aspirations are unable to fulfil them as they are unable to find the right set of people to form a team. They have the experience. They have the networks. They even have some money to spare. But after a hard day's work and a family to look after, they hardly find time or energy to work on the ground.
                            If you are one such individual, Startic Field is the place for you. Join the network and connect with student entrepreneurs with whom you can partner to make your long-buried dream of entrepreneurship a reality. </h4>
                    <a href="./forCorporateContributors" style={{width: "80%"}} className="w3-margin w3-row w3-round-xlarge w3-button w3-padding w3-pink w3-large" ><e className="w3-left ">For corporate professionals</e><e className="w3-right" >&gt;</e></a>
                </div>
                <div className="w3-third w3-padding">
                    <Image src="banner3.webp" className="w3-round-xlarge" alt=""></Image>
                </div>
            </div>
            <Timeline4 />
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
            <div style={{
                width:'80vw',
                margin:"auto",
                marginTop:'15vh',
                textAlign:'center'
            }}>
                < RecentEvents/>
            </div>
            <div style={{ height: "10vh" }}></div>
            </div>
        </>
    );
}

export default Home