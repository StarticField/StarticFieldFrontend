/* eslint-disable @next/next/no-img-element */
import style from "../styles/aboutUs.module.css"
import {Image, Text} from "@nextui-org/react";

export default function AboutUs(){
    return(
        <div className={style.main}>
            <p className={style.mainText}>
                Startic Field is a company which aims to bring together 2 powerful stakeholders to fuel the startup revolution in India.<br/><br/>

                On one hand are student entrepreneurs who have the energy, time and passion to build path breaking startups. But who have been hustling with the lack of experience and even small amunts of capital.<br/><br/>

                On the other hand is the huge community of experienced professionals, who have long nurtured a passion to startup. They have years of experience and small amounts of capital but do not have the time and availability due to personal or family constraints.<br/><br/>

                A simple match of complementary strengths to create an electrifying effect!
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
            >
                <img src={"./leftTeam.svg"} style={{

                    position: 'absolute',
                    top: '-4.3vh',
                    left: '0',
                    zIndex: '0',
                    width:'51vw'
                }} alt={"background"}/>
                <img src={"./rightTeam.svg"} style={{

                    position: 'absolute',
                    top: '-5.4vh',
                    right: '0',
                    zIndex: '0',
                    width:'51vw'
                }} alt={"background"}/>
            </div>
            <div className={style.team} style={{zIndex: "3",position:'relative'}}>
                <div className={style.person}>
                    <Image src={'ShubhanshuRao.jpeg'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'PriyanshNegi.jpg'}></Image>
                    <Text b className={style.personName}>Priyansh Negi</Text>
                </div>
                <div className={style.person}>
                    <Image src={'AnirudhMukkamala.jpeg'}></Image>
                    <Text b className={style.personName}>Anirudh Mukkamala</Text>
                </div>
                <div className={style.person}>
                    <Image src={'AryanKataria.jpeg'}></Image>
                    <Text b className={style.personName}>Aryan Kataria</Text>
                </div>
            </div>
            <div className={style.spaceTeamSection}></div>

            <div
                style={{
                    position: "relative",
                }}
                className={style.backgroundTeam}
            >
                <img src={"./leftTeam.svg"} style={{

                    position: 'absolute',
                    top: '-4.3vh',
                    left: '0',
                    zIndex: '0',
                    width:'51vw'
                }} alt={"background"}/>
                <img src={"./rightTeam.svg"} style={{

                    position: 'absolute',
                    top: '-5.4vh',
                    right: '0',
                    zIndex: '0',
                    width:'51vw'
                }} alt={"background"}/>
            </div>
            <div className={style.team} style={{zIndex: "3",position:'relative'}}>
                <div className={style.person}>
                    <Image src={'AshutoshBisht.png'}></Image>
                    <Text b className={style.personName}>Ashutosh Bisht</Text>
                </div>
                <div className={style.person}>
                    <Image src={'AyushSharma.jpeg'}></Image>
                    <Text b className={style.personName}>Ayush Sharma</Text>
                </div>
                <div className={style.person}>
                    <Image src={'AnkitGupta.png'}></Image>
                    <Text b className={style.personName}>Ankit Gupta</Text>
                </div>
            </div>
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
            <div  className={style.mentor}>
                <div  className={style.mentorText}>
                    <Text
                        className={style.mentorName}
                        weight={'semibold'}
                    >
                        Mr. N R Narayana Murthy
                    </Text>
                    <Text
                        className={style.mentorJob}
                        weight={'light'}
                    >
                        Founder of Infosys
                    </Text>
                </div>
                <Image className={style.mentorImage} src={'NarayanaMurty.png'}></Image>
            </div>
        </div>
    )
}