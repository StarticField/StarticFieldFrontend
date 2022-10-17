import {Layout} from "../components/Layout";
import {Grid, Image, Text} from "@nextui-org/react";
import styles from "../styles/forStudents.module.css"

export default function ForCorporateContributors(){
    return(
        <>
            <div className={styles.background}>
                <div className={styles.background2}></div>
                <Grid.Container className={styles.hero}>
                    <Grid xs={12}>
                        <Text h1 className={styles.heroHeading}>
                            For Corporate contributors
                        </Text>
                    </Grid>
                    <Grid  xs={12} className={styles.heroSection}>
                        <Image src={"cover2.webp"}></Image>
                    </Grid>
                    <Grid sm={6} xs={12} className={styles.heroSection}>
                        <Text className={styles.heroText}>
                            India is the country with the 2nd highest number of Unicorns after USA. However, if we take into consideration the population of both countries, India has only utilized 6% of its startup potential.
                            This is because a vast population of experienced and talented people with entrepreneurial aspirations are unable to fulfil them as they are unable to find the right set of people to form a team. They have the experience. They have the networks. They even have some money to spare. But after a hard day's work and a family to look after, they hardly find time or energy to work on the ground.
                            If you are one such individual, Startic Field is the place for you. Join the network and connect with student entrepreneurs with whom you can partner to make your long-buried dream of entrepreneurship a reality. There are 3 roles which you can 
                        </Text>
                    </Grid>
                </Grid.Container>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img2.webp'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3>1. Mentor</Text>
                            <Text className={styles.sectionDiscription}>
                               This is the easiest role which you can take if you do not want to get into the thick of the battle and would be happy to simply guide the startups of your choice with your immense knowledge and experience. You would not take any reward in the form of fee or equity but the startup you help will formally acknowledge your role as a Mentor and you can be proud to see them succeed. Based on the feedback from the startup, we have certificates for all our Mentors.
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div  className={styles.sectionText} style={{textAlign:'right'}}>
                        <div>
                            <Text b h3>2. Hawk</Text>
                            <Text className={styles.sectionDiscription}>
                               You are a Hawk if you have the knack to spot an opportunity before the ordinary people. You can browse through the list of student startups registered with us and connect with the co-founders of the one you are interested and find . Discuss with them and not be monetary. Student startups value your experience and industry connects as much as capital.
                            </Text>
                        </div>
                    </div>

                    <div className={styles.sectionImage} >
                        <Image src={'img4.webp'} alt={''}></Image>
                    </div>
                </div>
                <div className={styles.sectionReverse}>
                    <div className={styles.sectionImage} >
                        <Image src={'img1.webp'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3>3. Pioneer</Text>
                            <Text className={styles.sectionDiscription}>
                                If you have an idea which you thing can become big, you can participate in our Lateral Pitch contests. You can put in your idea and interview interested students who wish to become co-founders with you. Once you form a right team, we will help you in incorporation and you can use the Startic Field strategic planning tool to devise strategies and track their progress.                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.intro}>
                    <Text className={styles.bottomText} >
                        Please note that we are not an investment platform, where rich "uncles" can invest and calculate the RoI. You have to join a startup team and work with them to make the startup a success. Even if there would be a monetary component, it will be a small amount which you might have otherwise spent in going on a vacation or buying an expensive phone.
                        
                        All it takes is sparing some time from the weekend Netflix binge (which makes you feel miserable) and set out on an adventurous ride of entrepreneurship!
                    </Text>
                </div>
            </div>
            <div style={{ height: "10vh" }}></div>
        </>
    )
}
