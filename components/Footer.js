import styles from "../styles/footer.module.css"
import {Image, Link, Text} from "@nextui-org/react";

export default function Footer(){

    const text = "Startic Field is a company which aims to endow student entrepreneurs with the power of community, knowledge, capital and mentorship. It is also a forum where we bring together working professionals as contributors who have a passion to startup, years of experience and small amounts of capital but do not have the bandwidth to work on the ground."

    return(
        <div className={styles.main}>
            <div className={styles.infoSection}>
                <div className={styles.discription}>
                    <Image className={styles.discriptionImage} src="/logo.svg" />
                    <Text size={'18'}>{text}</Text>
                </div>
                <div className={styles.links}>
                    <div className={styles.linkSection}>
                        <Text size={'23'} weight={'semibold'}>Company</Text>
                        <Text size={'18'} className={styles.Items}>
                            <Link color="text" href="./aboutUs">
                            About Us
                            </Link>
                        </Text>
                        <Text size={'18'} className={styles.Items}>
                            <Link color="text" href="./eventsAndProgram">
                            Events
                            </Link>
                        </Text>
                    </div>
                    <div className={styles.otherLinks}>
                        <Text size={'23'} weight={'semibold'}>Important Links</Text>
                        <Text size={'18'} className={styles.Items}>
                            <Link color="text" href="./forStudents" >
                            Programs
                            </Link>
                        </Text>
                        <Text size={'18'} className={styles.Items}>
                            <Link color="text" href="https://discord.com/invite/uWxKXJRpKS">
                            Community
                            </Link>
                        </Text>
                    </div>
                    <div className={styles.contactUs}>
                        <Text size={'23'} weight={'semibold'}>Contact Us</Text>
                        <Text size={'18'} className={styles.Items}>priyansh@starticfield.com</Text>
                        <div className={styles.socialMedia}>
                            <Link href="https://in.linkedin.com/company/starticfield" color="text" >
                                <Image className={styles.socialIcons} src="/linkedin.svg" />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UC3V_g2rgU_G9newiszP5wnw/about" >
                                <Image className={styles.socialIcons} src="/youtube.svg" />
                            </Link>
                            <Link href="https://www.instagram.com/startic_field/" >
                                <Image className={styles.socialIcons} src="/instagram.svg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <br></br>
                <Image className={styles.bottomImage} src="/footer.webp" />
                <Text size={'18'}>@ 2022 StarticField Innovations Pvt Ltd. All rights reserved.</Text>
                <Link external href={"http://devlooper.in"} target={"_blank"} className={styles.devlooper}>
                    <Text b size={'18'}>Designed And Developed by</Text>
                    <Image className={styles.devlooperImage} src="/devlooper.svg" />
                </Link>
            </div>
        </div>
    )
}