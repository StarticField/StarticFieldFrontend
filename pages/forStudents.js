import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import styles from "../styles/forStudents.module.css";

export default function ForStudents() {
  return (
    <div className={styles.background}>
      <Grid.Container className={styles.hero}>
        <Grid xs={12}>
          <Text h1 className={styles.heroHeading}>
            For Students
          </Text>
        </Grid>
        <Grid xs={12} className={styles.heroSection}>
          <Image
            width="700px"
            height="500px"
            src="/cover2.webp"
            layout="fixed"
            alt=""
          />
        </Grid>
        <Grid sm={6} xs={12} className={styles.heroSection}>
          <Text className={styles.heroText}>
            Even if you do not have ideas but have the passion to join and
            contribute to a campus based startup, you need to create your
            profile on Startic Field.
          </Text>
        </Grid>
      </Grid.Container>
      <div className={styles.background2}></div>
      <div className={styles.intro}>
        <Text b h3>
          1. Be a part of something big:{" "}
        </Text>
        <Text className={styles.introText}>
          Startic Field is the home to the largest number of college based
          startups who are always looking to expand their teams. You can
          register yourself as any of these 3 roles:
        </Text>
      </div>
      <div style={{ height: "10vh" }}></div>
      <div className={styles.section}>
        <div className={styles.sectionImage}>
          <Image
            width="100px"
            height="100px"
            layout="responsive"
            src={"/img4.webp"}
            alt={""}
          />

        </div>
        <div className={styles.sectionText}>
          <div className="w3-margin-top">
            <Text  b h3>
              a. Technical Jedi
            </Text>
            <Text className={styles.sectionDiscription}>
              If you are a great coder or an expert in any particular
              technology, register yourself as a Technical Jedi. You can join a
              startup team and help them build a great product or platform. Or
              even join in as a CTO!
            </Text>
          </div>
          <div style={{ height: "5vh" }}></div>
          <div>
            <Text b h3>
              b. Market Marshall
            </Text>
            <Text className={styles.sectionDiscription}>
              No company can exist without customers even if it has a great
              product. And if you have a great network and are an expert in
              selling then startups on our platform are looking for you!
              Register yourself as a Market Marshall and show your selling
              skills. This is especially great for MBA students.
            </Text>
          </div>
          <div style={{ height: "5vh" }}></div>
          <div>
            <Text b h3>
              c. Strategic Ideator
            </Text>
            <Text className={styles.sectionDiscription}>
              You might not know the tech. You might not know the people. But if
              you are a person who thinks different from the rest, you can work
              with a startup to give them the billion dollar strategy to grow.
              Or a great feature which can be added or a unique market which
              they can tap. Your brain is your power. Its time to use it!
            </Text>
          </div>
        </div>
      </div>
      <div style={{ height: "10vh" }}></div>
      <div className={styles.intro}>
        <Text b h3>
          2. Get recognition for your work:
        </Text>
        <Text className={styles.introText}>
          Even if the entrepreneurship bug doesn’t bite you and you do not join
          a startup team, if you contribute in any way or form, the startup can
          recommend you for a recognition certificate which will be issued from
          Startic Field. This will add to your credentials when you are trying
          to get into your dream company.
        </Text>
      </div>
      <div style={{ height: "10vh" }}></div>
      <div className={styles.sectionReverse}>
        <div className={styles.sectionText} style={{ textAlign: "right" }}>
          <div>
            <Text b h3>
              3. Learn and Grow
            </Text>
            <Text className={styles.sectionDiscription}>
              You can attend knowledge sessions organized by experts and learn a
              thing or two about the sector in which you are interested to build
              your career. Or start a company at a later point.
            </Text>
          </div>
        </div>

        <div className={styles.sectionImage}>
          <Image
            width="100px"
            height="100px"
            layout="responsive"
            src={"/img3.webp"}
            alt={""}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionImage}>
          <Image
            width="100px"
            height="100px"
            layout="responsive"
            src={"/img2.webp"}
            alt={""}
          />
        </div>
        <div className={styles.sectionText}>
          <div>
            <Text b h3>
              4. Reward Points
            </Text>
            <Text className={styles.sectionDiscription}>
              For your activities within the platform, get to win reward points
              which can be redeemed for some attractive perks!
            </Text>
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}></div>
    </div>
  );
}
