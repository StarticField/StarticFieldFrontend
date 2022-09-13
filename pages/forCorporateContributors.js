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
                        <Image src={"cover2.png"}></Image>
                    </Grid>
                    <Grid sm={6} xs={12} className={styles.heroSection}>
                        <Text className={styles.heroText}>
                            If you are a working professional with a passion for working with startups in your spare time, this is the best forum for you. There are 3 roles which you can register as
                        </Text>
                    </Grid>
                </Grid.Container>
                <div className={styles.section}>
                    <div className={styles.sectionImage} >
                        <Image src={'img2.png'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3>1.Mentor</Text>
                            <Text className={styles.sectionDiscription}>
                                Guide the startup of your choice with your experience.No monetary investment. Monthly 1 meeting (minimum). Certificate of Mentorship after 12 months of mentorship.
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div  className={styles.sectionText} style={{textAlign:'right'}}>
                        <div>
                            <Text b h3>2.Hawk</Text>
                            <Text className={styles.sectionDiscription}>
                                Work with the startup of your choice by providing them inputs on strategy, connections and a small monetary investment (INR 100000) and get an equity of 5% in the startup.
                            </Text>
                        </div>
                    </div>

                    <div className={styles.sectionImage} >
                        <Image src={'img4.png'} alt={''}></Image>
                    </div>
                </div>
                <div className={styles.sectionReverse}>
                    <div className={styles.sectionImage} >
                        <Image src={'img1.png'} alt={''}></Image>
                    </div>
                    <div  className={styles.sectionText}>
                        <div>
                            <Text b h3>3.Pioneer</Text>
                            <Text className={styles.sectionDiscription}>
                                Form a team of passionate college students to build your own idea into a startup with a small monetary investment (INR 100000). Own 20% of the startup.                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.intro}>
                    <Text className={styles.bottomText} >
                        All it takes is sparing some time from the weekend Netflix binge (which makes you feel miserable) and set out on an adventurous ride of entrepreneurship!
                    </Text>
                </div>
            </div>
            <div style={{ height: "10vh" }}></div>
        </>
    )
}