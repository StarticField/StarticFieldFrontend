import style from "../styles/event.module.css"
import {Grid, Spacer, Text, Image, Link} from "@nextui-org/react";
import styles from "../styles/hero.module.css";
import TimelineCTOHunt from "../components/TimelineCTOHunt";

export default function CTOHunt(){
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
                <e className="w3-text-blue"> 6 Nov - 3 Dec !!</e>
            </Text>
            <h4>If you're a student with technical skills and an entrepreneurial mindset, then this is the perfect competition for you! You'll have the chance to join an ambitious student-led startup as a Tech Cofounder or CTO and win exciting prizes for sure - so don't miss out and register now!</h4>
            <Spacer x={4} />
            <Link href="https://discord.com/invite/uWxKXJRpKS" className="w3-button w3-round-xxlarge w3-green">
                <p className="w3-large" >Regsiter now !!</p>
            </Link>
            </div>
        </Grid>
        <div className="w3-half">
            <Image src="heroCover.png" alt=""></Image>
        </div>
        </Grid.Container>
        <div className="w3-green w3-row w3-padding ">
            <div className="w3-half w3-padding">
                <Image src="cover2.png" alt=""></Image>
            </div>
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
                    Prizes !!!
                </Text>
                <h4 className="w3-margin">On one hand are student entrepreneurs who have the energy, time and passion to build path breaking startups. But who have been hustling with the lack of experience and even small amounts of capital.</h4>
            </div>
        </div>
        <div className="w3-blue w3-row w3-padding ">
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
                <Image src="img1.png" alt=""></Image>
            </div>
        </div>
        <TimelineCTOHunt />
        <Spacer y={3} />
        <div style={{
                  position: "relative",
              }} 
            className="w3-row w3-margin w3-black w3-center" >
            <h3>For more information about the event download the brochure</h3>
            <a className="w3-button w3-blue w3-round-xxlarge" >Download CTO Hunt Brochure</a>
        </div>
        <Spacer y={2} />
    </>
    )
}
