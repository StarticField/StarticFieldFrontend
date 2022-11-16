import { Typography } from "@mui/material";
import { Button, Grid, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "theme-ui";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <Grid.Container className={styles.main}>
      <Container className="w3-half">
        <div className={styles.heroText}>
          <Text
            h1
            weight={"semibold"}
            css={{
              margin: "0",
              padding: "0",
            }}
          >
            The First Step To Electrifying Your Startup Journey
          </Text>
          <Text
            h1
            weight={"semibold"}
            css={{
              margin: "0",
              padding: "0",
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
          <Link
            href="https://discord.com/invite/uWxKXJRpKS"
            prefetch={false}
            className={styles.joinButton}
          >
              <button
                className="w3-button w3-indigo w3-round-xxlarge"
                auto
              >
                Join Discord
              </button>
          </Link>
        </div>
      </Container>
      <Container width="100vw" height="100vh"  className="w3-half">
        <Image width="750px" height="650px" src="/heroCover.webp" alt="" />
      </Container>
    </Grid.Container>
  );
};

export default Hero;
