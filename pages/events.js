/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import styles from "../styles/index.module.css"
import RecentEvents from "../components/RecentEvents";
import {Router, useRouter} from "next/router"; 
import {Grid, Spacer, Text, Image, Link} from "@nextui-org/react";

import axiosInstance from "../components/axiosAPI";
export default function Home() {
    const message = useRouter().query.message;
    const [ctoHuntStatus, setCTOHuntStatus] = useState("unavailable");
    const [authenticated, setAuthenticated] = useState(false);
    const [mockpitchStatus, setMockpitchStatus] = useState("unavailable");
    const router = useRouter();

    const enroll = (e) => {
        try {
            axiosInstance.post('/enroll-in-event/', {
                username: localStorage.getItem("username"),
                event: e.target.value,
            })
            .then((response) => {
              if (response.status==200){
                console.log("enrolled");
                if (e.target.value==="mockpitch"){
                    router.push({
                        pathname: "/embed",
                        query: {"message": "Successfully enrolled in MockPitch !"}
                    });
                }
                else {
                    router.push({
                        pathname: "/cto-hunt",
                        query: {"message": "Successfully enrolled in CTO Hunt !"}
                    });
                }
              }
              else {setError(response);}
            });
        } 
        catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        var access_token = localStorage.getItem("access_token");
        var refresh_token = localStorage.getItem("refresh_token");
        if (access_token && refresh_token){
          setAuthenticated(true);
          getEnrolledStatus();
        }
      }, []);
    const getEnrolledStatus = () => {
        try {
            axiosInstance.get('/enrolled-status/', {
                params: {username: localStorage.getItem("username")}
            })
            .then((response) => {
              if (response.status==200){
                setCTOHuntStatus(response.data.ctohunt);
                setMockpitchStatus(response.data.mockpitch);
                console.log(response);
              }
              else {setError(response);}
            });
        } 
        catch (error) {
            throw error;
        }
    };
    return (
        <>
            {message?
            <h5 id="message" className="w3-row w3-margin-top w3-green w3-padding" >
                {message}
            </h5>
            :
            null}
            <h2 className="w3-margin w3-center" >Latest Events</h2>
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
            
            <div className="w3-row w3-margin-top w3-margin-bottom ">
                <div className="w3-third w3-padding">
                    <Image src="allIndiaHunt.webp" className="w3-round-large" alt=""></Image>
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
                        All India CTO Hunt
                    </Text>
                    <h4 className="w3-margin w3-text-grey">If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</h4>
                    {
                        authenticated ?
                        (
                            ctoHuntStatus==="enrolled"?
                            <a href={"./dashboard"}  className="w3-round-xxlarge w3-button w3-indigo w3-large w3-margin" >View Progress &gt;</a>
                            :
                            (
                                ctoHuntStatus==="available"?
                                <button value={"ctohunt"} onClick={enroll} className="w3-round-xxlarge w3-indigo w3-button w3-large w3-margin" >Enroll Now</button>
                                :
                                <a href={"./dashboard"} style={{backgroundColor: "red"}} className="w3-round-xxlarge w3-button w3-large w3-margin" >Complete your profile to Enroll</a>
                            )
                        )
                        :
                        <a href="./log-in" className="w3-round-xxlarge w3-button w3-large w3-margin" >Login to get enrolled</a>
                    }
                    <a href="./cto-hunt" className="w3-button w3-round-xlarge w3-text-indigo w3-padding w3-large" ><e className="w3-left ">More details</e><e className="w3-right" >&gt;</e></a>
                </div>
            </div>
            <div className="w3-row w3-margin-top w3-margin-bottom ">
                <div className="w3-third w3-padding">
                    <Image src="commingSoon.webp" className="w3-round-large" alt=""></Image>
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
                        Mock Pitch
                    </Text>
                    <h4 className="w3-margin w3-text-grey">This event is for aspiring Shark Tank pitchers who want to understand sharks and how they evaluate a pitch better. Our eligible participants are anyone who dreams to win the show. This is their first chance to pitch their ideas to previous season winners and seek feedback, suggestions, and experience about working with various sharks.</h4>
                    {
                        authenticated ?
                        (
                            mockpitchStatus==="enrolled"?
                            <a href={"./dashboard"}  className="w3-round-xxlarge w3-button w3-indigo w3-large w3-margin" >View Progress &gt;</a>
                            :
                            <button value={"ctohunt"} onClick={enroll} className="w3-round-xxlarge w3-indigo w3-button w3-large w3-margin" >Enroll Now</button>
                        )
                        :
                        <a href="./log-in" className="w3-round-xxlarge w3-red w3-button w3-large w3-margin" >Login to get enrolled</a>
                    }
                    <a href="./mock-pitch" className="w3-button w3-round-xlarge w3-text-indigo w3-padding w3-large" ><e className="w3-left ">More details</e><e className="w3-right" >&gt;</e></a>
                 </div>
            </div>
            <div className="w3-row w3-margin-top w3-margin-bottom ">
                <div className="w3-third w3-padding">
                    <Image src="big5.webp" className="w3-round-large" alt=""></Image>
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
                        Big 5 (Problems)
                    </Text>
                    <h4 className="w3-margin w3-text-grey">Every big company starts off with an idea and few people with the commitment to make it into a reality. And if you are a student or a group of students with these two things, Startic Field is the destination you should go to next. This is the sandbox where you work on your ideas and build them into successful business by following the below journey. </h4>
                    <h4 className="w3-margin w3-text-grey">Even if you do not have ideas but have the passion to join and contribute to a campus based startup, you need to create your profile on Startic Field.</h4>
                    <a href="https://discord.com/invite/uWxKXJRpKS" className="w3-round-xxlarge w3-purple w3-button w3-large w3-margin" >Join Discord to get the link</a>
                </div>
            </div>
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
        </>
    );
}
