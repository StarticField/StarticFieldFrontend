import {Grid, Spacer, Text, Image, Link} from "@nextui-org/react";
import styles from "../styles/hero.module.css"


export default function Hero() {
  return (
    <Grid.Container className={styles.main}>
      <Grid xs={12} md={5.7}>
        <div className={styles.heroText}>
          <Text
            h1
            weight={'semibold'}
            css={{
               margin:'0',
               padding:'0',
            }}
          >
            The First Step To Electrifying Your Startup Journey
          </Text>
          <Text
            h1
            weight={'semibold'}
            css={{
               margin:'0',
               padding:'0',
            }}
          >
              Starts Here!
          </Text>
          <Spacer x={4} />
            <Text
              h3
              css={{
                textGradient:
                  "to right, #3361AD 5%,#6061AC 10%,#39B8C8 20%,#6AC5AA 5%",
              }}
            >
              Startic Field
            </Text>
          <Link href="https://discord.com/invite/uWxKXJRpKS" className={styles.joinButton}>
              <Text weight={'semibold'}>Join Discord</Text>
          </Link>
        </div>
      </Grid>
      <Grid xs={12} sm={6.3} md={6.3} className={styles.heroImage}>
        <Image src="heroCover.png" alt=""></Image>
      </Grid>
    </Grid.Container>
  );
}
