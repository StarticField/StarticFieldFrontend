import React from "react";
import {
  Card,
  Grid,
  Text,
  Link,
  Button,
  Col,
  Row,
  Spacer,
} from "@nextui-org/react";

const BrandingPartners = () => {
  return (
    <div>
      <div className="top-section">
        <Text h1 size={28}>
          Branding Partners
        </Text>
      </div>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6}>
          <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  New
                </Text>
                <Text h3 weight="bold" transform="uppercase" color="#ffffffAA">
                  Pnapaao
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="./brand_partner1.png"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={22}>
                    Be the Brand with Pnapaao.
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Link href="https://pnapaao.com ">
                      <Button flat auto rounded color="secondary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Know More
                        </Text>
                      </Button>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6}>
          <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  New
                </Text>
                <Text h3 weight="bold" transform="uppercase" color="#ffffffAA">
                  Befikra
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="./brand_partner2.jpg"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={22}>
                    Befikra
                  </Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Link href="https://linktr.ee/befikra_community">
                      <Button flat auto rounded color="secondary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          Know More
                        </Text>
                      </Button>
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default BrandingPartners;
