import {Grid, Image, Text} from "@nextui-org/react";
import styles from "../styles/forStudents.module.css"

export default function ForStartups(){
    return(
        <>
            <div className={styles.background}>
                <div className={styles.background2}></div>
                <Grid.Container className={styles.hero}>
                    <Grid xs={12}>
                        <Text h1 className={styles.heroHeading}>For Student Startups</Text>
                    </Grid>
                    <Grid  xs={12} className={styles.heroSection}>
                        <Image src={"cover2.png"}></Image>
                    </Grid>
                    <Grid sm={6} xs={12} className={styles.heroSection}>
                        <Text className={styles.heroText}>
                            Startic Field is the sandbox where you work on your ideas and build them into successful business by following the below journey:
                        </Text>
                    </Grid>
                </Grid.Container>
                <div className={styles.intro}>
                    <Text b h3 className={styles.introHeading}>1.Develop your idea</Text>
                    <Text className={styles.introText}>Use VOLT, our strategic planning tool to discover customers, markets and partners for your
                        idea. Formulatefvdfvfdvdf and input strategies to take your startup to the next level.</Text>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img4.png'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3 className={styles.introHeading}>2.Work on your idea</Text>
                            <Text className={styles.sectionDiscription}>Based on the strategy formulated, set and track goals for your team. Get points on achieving these targets and compare with other startups.</Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3 className={styles.introHeading}>3.Build your team</Text>
                            <Text className={styles.sectionDiscription}>Get a co-founder, CTO or any other team
                                members from our vibrant community</Text>
                        </div>
                    </div>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.sectionReverse}>
                    <div  className={styles.sectionText} style={{textAlign:'right'}}>
                        <div>
                            <Text b h3 className={styles.introHeading}>4.Get the essentials</Text>
                            <Text className={styles.sectionDiscription}>
                                Before you get a Shark, you need a Hawk. Hawks are experienced industry professionals who will invest small but work with you to make your startup big!
                            </Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3 className={styles.introHeading}>5.Get credibility</Text>
                            <Text className={styles.sectionDiscription}>
                                Get your startup incorporated by working with our partners. Hawks can help you finance the cost.
                            </Text>
                        </div>
                    </div>
                    <div className={styles.sectionImage} >
                        <Image src={'img3.png'} alt={''}></Image>
                    </div>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img2.png'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3 className={styles.introHeading}>6.Attend knowledge sessions by experts</Text>
                            <Text className={styles.sectionDiscription}>
                                Startic Field aims to become India’s most trusted hub of student startups. Get the Startic Field badge on your website as well as signature on all your emails.
                            </Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3 className={styles.introHeading}>7.Prepare for accelerators</Text>
                            <Text className={styles.sectionDiscription}>
                                Attend weekly knowledge sessions by entrepreneurs, experts and industry leaders.
                            </Text>
                        </div>
                    </div>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.intro}>
                    <Text b h3 className={styles.introHeading}>8.Prepare for accelerators</Text>
                    <Text className={styles.introText} css={{textAlign: 'center'}}>There are a number of accelerators in India and across the world, which help startups
                        reach the next level. Our program Supercharge will help you prepare your startup to enter
                        these
                    </Text>
                </div>
                <div className={styles.intro}>
                    <Text className={styles.bottomText} >Startic Field is the place where you can prepare for
                        this challenge. We run programs for all our startups
                        where we bring people who have successfully
                        entered these accelerators and championships to
                        train you to enter them.
                    </Text>
                </div>
            </div>
            <div style={{ height: "10vh" }}></div>
        </>
    )
}