import {Layout} from "../components/Layout";
import {Grid, Image, Spacer, Text} from "@nextui-org/react";
import styles from "../styles/forStudents.module.css"

export default function ForStartups(){
    return(
        <Layout>
            <div className={styles.background}>
                <Grid.Container className={styles.hero}>
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
                    <Text b h3>1.Develop your idea</Text>
                    <Text className={styles.introText}>Use VOLT, our strategic planning tool to discover customers, markets and partners for your
                        idea. Formulate and input strategies to take your startup to the next level.</Text>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img4.png'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3>1.Develop your idea</Text>
                            <Text className={styles.sectionDiscription}>Use VOLT, our strategic planning tool to discover customers, markets and partners for your
                                idea. Formulate and input strategies to take your startup to the next level.</Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3>3.Build your team</Text>
                            <Text className={styles.sectionDiscription}>Get a co-founder, CTO or any other team
                                members from our vibrant community</Text>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div  className={styles.sectionText} style={{textAlign:'right'}}>
                        <div>
                            <Text b h3>1.Develop your idea</Text>
                            <Text className={styles.sectionDiscription}>Use VOLT, our strategic planning tool to discover customers, markets and partners for your
                                idea. Formulate and input strategies to take your startup to the next level.</Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3>3.Build your team</Text>
                            <Text className={styles.sectionDiscription}>Get a co-founder, CTO or any other team
                                members from our vibrant community</Text>
                        </div>
                    </div>

                    <div className={styles.sectionImage} >
                        <Image src={'img3.png'} alt={''}></Image>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img2.png'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3>1.Develop your idea</Text>
                            <Text className={styles.sectionDiscription}>Use VOLT, our strategic planning tool to discover customers, markets and partners for your
                                idea. Formulate and input strategies to take your startup to the next level.</Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3>3.Build your team</Text>
                            <Text className={styles.sectionDiscription}>Get a co-founder, CTO or any other team
                                members from our vibrant community</Text>
                        </div>
                    </div>
                </div>
                <div className={styles.intro}>
                    <Text b h3>8.Prepare for accelerators</Text>
                    <Text className={styles.introText}>There are a number of accelerators in India and across the world, which help startups
                        reach the next level. Our program Supercharge will help you prepare your startup to enter
                        these
                    </Text>
                </div>
                <div className={styles.intro}>
                    <Text className={styles.introText} style={{width: "38vw"}}>Startic Field is the place where you can prepare for
                        this challenge. We run programs for all our startups
                        where we bring people who have successfully
                        entered these accelerators and championships to
                        train you to enter them.
                    </Text>
                </div>
            </div>
            <div style={{ height: "10vh" }}></div>
        </Layout>
    )
}