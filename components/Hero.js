import { Typography } from "@mui/material";
import { Button, Grid, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <Grid.Container className={styles.main}>
      <Grid xs={12} md={5.7}>
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
            <a>
              <Typography
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,96,1) 25%, rgba(9,12,123,1) 74%, rgba(0,212,255,1) 100%)",
                  maxWidth: "120px",
                  p: 1,
                  borderRadius: "12px",
                  fontWeight: 700,
                }}
                color="gradient"
                auto
              >
                Join Discord
              </Typography>
            </a>
          </Link>
        </div>
      </Grid>
      <Grid xs={12} sm={6.3} md={6.3} className={styles.heroImage}>
        <Image width="750px" height="500px" src="/heroCover.webp" alt="" />
      </Grid>
    </Grid.Container>
  );
};

export default Hero;
