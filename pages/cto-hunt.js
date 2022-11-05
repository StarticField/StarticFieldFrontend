import {Grid, Spacer, Text, Image, Link} from "@nextui-org/react";
import styles from "../styles/hero.module.css";
import TimelineCTOHunt from "../components/TimelineCTOHunt";
import { useState, useEffect } from "react";
import {Router, useRouter} from "next/router"; 

import axiosInstance from "../components/axiosAPI";
export default function CTOHunt(){
    const mes = useRouter().query.message;
    const [message, setMessage] = useState(mes);
    const [status, setStatus] = useState("unavailable");
    const [authenticated, setAuthenticated] = useState(false);

    const enroll = () => {
        try {
            axiosInstance.post('/enroll-in-event/', {
                username: localStorage.getItem("username"),
                event: "ctohunt",
            })
            .then((response) => {
            if (response.status==200){
                console.log("enrolled");
                setStatus("enrolled");
            }
              else {setMessage("Successfully enrolled in CTO Hunt !");}
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
                setStatus(response.data.ctohunt);
                console.log(response);
              }
              else {setError(response);}
            });
        } 
        catch (error) {
            throw error;
        }
    };

    return(
    <>
        <Grid.Container className={styles.main}>
        <Grid xs={12} md={5.7}>
            <div className={styles.heroText}>
            <Text
                h1
                weight={'semibold'}
                css={{
                margin:'0',
                padding:'0',
                }}
            >
                ALL INDIA STUDENT CTO HUNT 2022
            </Text>
            <Text
                h1
                weight={'semibold'}
                css={{
                margin:'0',
                padding:'0',
                }}
            >
                <e className="w3-text-blue"> 7 Nov Onwards</e>
            </Text>
            <h4>If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</h4>
            <Spacer x={4} />
            {
                        authenticated ?
                        (
                            status==="enrolled"?
                            <a href={"./dashboard"}  className="w3-round-xxlarge w3-button w3-text-green w3-large w3-margin" >View Progress &gt;</a>
                            :
                            (
                                status==="available"?
                                <button onClick={enroll} className="w3-round-xxlarge w3-indigo w3-button w3-large w3-margin" >Enroll Now</button>
                                :
                                <a href={"./dashboard"} style={{backgroundColor: "red"}} className="w3-round-xxlarge w3-button w3-large w3-margin" >Complete your profile to Enroll</a>
                            )
                        )
                        :
                        <a href="./log-in" className="w3-round-xxlarge w3-button w3-large w3-margin" >Login to get enrolled</a>
                    }
            </div>
        </Grid>
        <div className="w3-half">
            <Image src="heroCover.webp" alt=""></Image>
        </div>
        </Grid.Container>
        <div className="startic-green w3-row w3-padding ">
            <div className="w3-half w3-padding">
                <Image src="cover2.webp" alt=""></Image>
            </div>
            <div className="w3-padding w3-half">
                <Text
                    h1
                    className="w3-margin w3-text-yellow"
                    weight={'semibold'}
                    css={{
                    margin:'0',
                    padding:'0',
                    }}
                >
                    Get amazing cash Prizes !!!
                </Text>
                <div className="w3-margin">
                    <h2 className="w3-margin-top">1st Prize <e className="w3-yellow w3-padding w3-round-large w3-right">Rs. 10,000</e></h2>
                    <br />
                    <h2 className="w3-margin-top">2nd Prize <e className="w3-yellow w3-padding w3-round-large w3-right">Rs. 7,000</e></h2>
                    <br />
                    <h2 className="w3-margin-top">3rd Prize <e className="w3-yellow w3-padding w3-round-large w3-right">Rs. 5,000</e></h2>
                </div>
            </div>
        </div>
        <div className="startic-blue w3-row w3-padding ">
            <div className="w3-padding w3-half">
                <Text
                    h1
                    className="w3-margin"
                    weight={'semibold'}
                    css={{
                    margin:'0',
                    padding:'0',
                    }}
                >
                    Participating Startups
                </Text>
                <h4 className="w3-margin">Coming soon…</h4>
            </div>
            <div className="w3-half w3-padding">
                <Image src="img1.webp" alt=""></Image>
            </div>
        </div>
        <TimelineCTOHunt />
        <Spacer y={3} />
        <div style={{
                  position: "relative",
              }} 
            className="w3-row w3-margin w3-black w3-center" >
            <h3>For more information</h3>
            <a href={"./cto_hunt_brochure.pdf"} className="w3-button w3-blue w3-round-xxlarge" >Download CTO Hunt Brochure</a>
            <p className="w3-padding w3-large">Or contact us through <b className="w3-text-blue">priyansh@starticfield.com</b></p>
        </div>
        <Spacer y={2} />
    </>
    )
}
