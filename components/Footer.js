import styles from "../styles/footer.module.css";
import { Text } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const text =
    "Startic Field is a company which aims to endow student entrepreneurs with the power of community, knowledge, capital and mentorship. It is also a forum where we bring together working professionals as contributors who have a passion to startup, years of experience and small amounts of capital but do not have the bandwidth to work on the ground.";

  return (
    <div className={styles.main}>
      <div className={styles.infoSection}>
        <div className={styles.discription}>
          <Image
            // className={styles.discriptionImage}
            width="150px"
            height="100px"
            src="/logo.svg"
            layout="fixed"
            alt=""
           
          />
          <Text size={"18"}>{text}</Text>
        </div>
        <div className={styles.links}>
          <div className={styles.linkSection}>
            <Text size={"23"} weight={"semibold"}>
              Company
            </Text>
            <Text size={"18"} className={styles.Items}>
              <Link href="./aboutUs" color="text" prefetch={false}>
                <a>About Us</a>
              </Link>
            </Text>
            <Text size={"18"} className={styles.Items}>
              <Link href="./eventsAndProgram" color="text" prefetch={false}>
                <a>Events</a>
              </Link>
            </Text>
          </div>
          <div className={styles.otherLinks}>
            <Text size={"23"} weight={"semibold"}>
              Important Links
            </Text>
            <Text size={"18"} className={styles.Items}>
              <Link href="./forStudents" color="text" prefetch={false}>
                <a>Programs</a>
              </Link>
            </Text>
            <Text size={"18"} className={styles.Items}>
              <Link
                href="https://discord.com/invite/uWxKXJRpKS"
                color="text"
                prefetch={false}
              >
                <a>Community</a>
              </Link>
            </Text>
          </div>
          <div className={styles.contactUs}>
            <Text size={"23"} weight={"semibold"}>
              Contact Us
            </Text>
            <Text size={"18"} className={styles.Items}>
              priyansh@starticfield.com
            </Text>
            <div className={styles.socialMedia}>
              <Link
                href="https://in.linkedin.com/company/starticfield"
                color="text"
                prefetch={false}
              >
                <a className={styles.socialIcons}>
                  <Image
                    prefetch={false}
                    className={styles.socialIcons}
                    src="/linkedin.svg"
                    width="25px"
                    height="25px"
                    layout="fixed"
                    alt=""
                    style={{
                      margin: '-3px !important',
                      padding: '8px',
                      height: '50px',
                    }}
                  />
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UC3V_g2rgU_G9newiszP5wnw/about">
                <a className={styles.socialIcons}>
                  <Image
                    prefetch={false}
                    
                    src="/youtube.svg"
                    width="25px"
                    height="25px"
                    layout="fixed"
                    alt=""
                   
                  />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/startic_field/"
                prefetch={false}
              >
                <a className={styles.socialIcons}>
                  <Image
                    className={styles.socialIcons}
                    src="/instagram.svg"
                    width="25px"
                    height="25px"
                    layout="fixed"
                    alt=""
                  />
                </a>
              </Link>
              <Link
                href="https://chat.whatsapp.com/CZMeBhMmuKO7q5y2WPXvub"
                prefetch={false}
              >
                <a className={styles.socialIcons}>
                  <Image
                    className={styles.socialIcons}
                    src="/whatsapp.svg"
                    width="25px"
                    height="25px"
                    layout="fixed"
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <br></br>
        <Image
          className={styles.bottomImage}
          src="/footer.webp"
          width="700px"
          height="300px"
          alt=""
        />
        <Text size={"18"}>
          @ 2022 StarticField Innovations Pvt Ltd. All rights reserved.
        </Text>
        <Link
          external
          href={"http://devlooper.in"}
          target={"_blank"}
          className={styles.devlooper}
        >
          <a>
            <Text style={{marginBottom:'20px !important'}} b size={"18"}>
              Designed And Developed by
            </Text>
            <Image
            className="w3-margin-top"
              src="/devlooper.svg"
              width="100px"
              height="100px"
              layout="fixed"
              alt=""
              style={{marginTop:'120px'}}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
