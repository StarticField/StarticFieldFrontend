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
                        <Image src={"cover2.webp"}></Image>
                    </Grid>
                    <Grid sm={6} xs={12} className={styles.heroSection}>
                        <Text className={styles.heroText}>
                            Every big company starts off with an idea and few people with the commitment to make it into a reality. And if you are a student or a group of students with these two things, Startic Field is the destination you should go to next. This is the sandbox where you work on your ideas and build them into successful business by following the below journey:
                        </Text>
                    </Grid>
                </Grid.Container>
                <div className={styles.intro}>
                    <Text b h3 className={styles.introHeading}>1. Develop your idea</Text>
                    <Text className={styles.introText}>Register as a startup and use the tools in the platform to build on your idea. Our strategy module helps you to visualize your idea from all possible angles. Our team will also work with you to use this tool effectively so that you can identify obvious and non-obvious stakeholders and craft out of the box strategies to reach your potential customers.</Text>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img4.webp'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3 className={styles.introHeading}>2. Work on your idea</Text>
                            <Text className={styles.sectionDiscription}>Based on the strategy set, the platform will set out tasks and milestones for you to achieve by utilizing other business modules which we are currently building. Don’t worry. Our team will be helping you on the way by utilizing our networks and contacts. Based on your achievement of targets, the platform will allocate points to you. These points will keep adding to create a score for your startup which you can showcase.
</Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3 className={styles.introHeading}>3. Build your team</Text>
                            <Text className={styles.sectionDiscription}>We are growing fast as a community and chances are high that you can get a co-founder, CTO or any other team members from this vibrant group.
</Text>
                        </div>
                    </div>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.sectionReverse}>
                    <div  className={styles.sectionText} style={{textAlign:'right'}}>
                        <div>
                            <Text b h3 className={styles.introHeading}>4. Get the essentials</Text>
                            <Text className={styles.sectionDiscription}>
                               Once you feel that your startup has reached a level where it needs to become a legal entity, we will help you get great deals on incorporation, address services, domain name and email ids. If you are lucky and we find your idea interesting, we may also sponsor the entire cost of this step.
                            </Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3 className={styles.introHeading}>5. Get credibility</Text>
                            <Text className={styles.sectionDiscription}>
                               Startic Field aims to become India’s most trusted hub of student startups. When you register your startup with this platform, you are the part of an elite group. You can showcase the Startic Field badge on your website. It will also appear in all your emails as a signature. This will add to your credibility whenever you write to an important stakeholder, increasing your chances of a response.
                            </Text>
                        </div>
                    </div>
                    <div className={styles.sectionImage} >
                        <Image src={'img3.webp'} alt={''}></Image>
                    </div>
                </div>
                <div style={{height: "10vh"}}></div>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img2.webp'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3 className={styles.introHeading}>6. Attend knowledge sessions by experts</Text>
                            <Text className={styles.sectionDiscription}>
                               Every week we have live sessions where experts and leaders of various business domains come and speak. You can attend these live sessions and gain valuable insights in the domain where your startup operates.
                            </Text>
                        </div>
                        <div style={{ height: "5vh" }}></div>
                        <div>
                            <Text b h3 className={styles.introHeading}>7. Prepare for accelerators</Text>
                            <Text className={styles.sectionDiscription}>
                               There are a number of accelerators in India and across the world, which help startups reach the next level. There are also shows like Shark Tank as well. Remember the days you used to prepare for entrance exams? Well getting into one of these reputed accelerators is way tougher than that. 
                            </Text>
                        </div>
                    </div>
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
