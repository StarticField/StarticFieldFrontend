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
            <div className={style.team}>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
            </div>
            <div className={style.space1}></div>
            <div className={style.team}>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
                </div>
                <div className={style.person}>
                    <Image src={'dummy.png'}></Image>
                    <Text b className={style.personName}>Shubhanshu Rao</Text>
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