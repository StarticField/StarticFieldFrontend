import styles from "../styles/footer.module.css"
import {Image, Link, Text} from "@nextui-org/react";

export default function Footer(){

    const text = "Startic Field is a company which aims to endow student entrepreneurs with the power of community, knowledge, capital and mentorship. It is also a forum where we bring together working professionals as contributors who have a passion to startup, years of experience and small amounts of capital but do not have the bandwidth to work on the ground."

    return(
        <div className={styles.main}>
                <div className={styles.discription}>
                    <Image className={styles.discriptionImage} src="/logo.png" />
                    <Text size={'18'}>{text}</Text>
                </div>
                <div className={styles.links}>
                    <div className={styles.linkSection}>
                        <Text size={'23'} weight={'semibold'}>Company</Text>
                        <Text size={'18'} className={styles.Items}>About Us</Text>
                        <Text size={'18'} className={styles.Items}>Privacy Policy</Text>
                        <Text size={'18'} className={styles.Items}>Terms of Conditions</Text>
                    </div>
                    <div className={styles.otherLinks}>
                        <Text size={'23'} weight={'semibold'}>Other Links</Text>
                        <Text size={'18'} className={styles.Items}>Community</Text>
                        <Text size={'18'} className={styles.Items}>Events</Text>
                        <Text size={'18'} className={styles.Items}>Programs</Text>
                        <Text size={'18'} className={styles.Items}>Careers</Text>
                    </div>
                    <div className={styles.contactUs}>
                        <Text size={'23'} weight={'semibold'}>Contact Us</Text>
                        <Text size={'18'} className={styles.Items}>Email: <br/>Priyansh@starticField.com</Text>
                        <div className={styles.socialMedia}>
                            <Link>
                                <Image className={styles.socialIcons} src="/linkedin.svg" />
                            </Link>
                            <Link>
                                <Image className={styles.socialIcons} src="/twitter.svg" />
                            </Link>
                            <Link>
                                <Image className={styles.socialIcons} src="/instagram.svg" />
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}