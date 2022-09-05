import { Grid, Spacer, Text, Image, Link } from "@nextui-org/react";
import CustomButton from "./CustomButton";

export default function Hero() {
  return (
    <Grid.Container
      css={{
        width: "99vw",
        height: "99vh",
        margin: "auto",
      }}
      justify="center"
    >
      <Grid xs={12} md={6}>
        <div
          style={{
            width: "70%",
            margin: "0 auto",
            marginTop: "90px",
            marginBottom: "90px",
          }}
        >
          <Text
            h1
            size={40}
            css={{
              "@xs": {
                fontSize: "20px",
                textAlign: "center",
              },
              "@md": {
                  fontSize: "50px",
                  textAlign: "left",
              },
            }}
          >
            The First Step To Electrifying Your Startup Journey Starts Here!
          </Text>
          <Spacer x={2} />
          <Link>
            <Text
              h3
              css={{
                textGradient:
                  "to right, #3361AD -20%,#6061AC 5%,#39B8C8 80%,#6AC5AA -90%",
              }}
            >
              Startic Field
            </Text>
          </Link>
          <Spacer x={2} />
          <CustomButton>Discord</CustomButton>
        </div>
      </Grid>
      <Grid xs={10} sm={6} md={6}>
        <Image src="heroCover.png" alt=""></Image>
      </Grid>
    </Grid.Container>
  );
}
