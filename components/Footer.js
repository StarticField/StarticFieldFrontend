import {Grid, Text, Image, Link, Spacer} from "@nextui-org/react";
export default function Footer(){

    const text = "Startic Field is a company which aims to endow student entrepreneurs with the power of community, knowledge, capital and mentorship. It is also a forum where we bring together working professionals as contributors who have a passion to startup, years of experience and small amounts of capital but do not have the bandwidth to work on the ground."

    return(
        <Grid.Container gap={2} css={{
            backgroundColor:"#303030",
            padding:"50px"
        }} >
            <Grid sm={4} xs={12} >
               <Grid.Container>
                   <Grid>
                       <Image src={"/logo.png"} alt={"logo"} width={"150px"} ></Image>
                   </Grid>
                   <Grid>
                       <Text>{text}</Text>
                   </Grid>
               </Grid.Container>
            </Grid>
            <Grid xs={8}>
                <Grid.Container>
                    <Grid css={{
                        marginTop:'20px'
                    }} sm={4} xs={6}>
                        <Grid.Container>
                            <Grid xs={12}>
                                <Text b>Company</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>About Us</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>Privacy Policy</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>Terms and Conditions</Text>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                    <Grid css={{
                        marginTop:'20px'
                    }} sm={4} xs={6}>
                        <Grid.Container>
                            <Grid>
                                <Text b>Other Links</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>Community</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>Events</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>Careers</Text>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                    <Grid css={{
                        marginTop:'20px'
                    }} sm={4} xs={12}>
                        <Grid.Container>
                            <Grid>
                                <Text b>Contact Us</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text>Email:<br/>Priyansh@starticField.com</Text>
                            </Grid>
                            <Grid>
                                <Image src={"linkedin.svg"} alt={""}></Image>
                            </Grid>
                            <Grid>
                                <Image src={"twitter.svg"} alt={""}></Image>
                            </Grid>
                            <Grid>
                                <Image src={"instagram.svg"} alt={""}></Image>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
            </Grid>
            <Spacer y={"4"}></Spacer>
            <Grid xs={12}>
                <Grid.Container justify="center">
                    <Grid xs={12}>
                        <Image src={'footer.png'}></Image>
                    </Grid>
                    <Grid justify="center" xs={12}>
                        <Text>© 2022, Starticfield Innovations Pvt. Ltd. All Rights Reserved.</Text>
                    </Grid>
                    <Grid justify="center" xs={12}>
                        <Text b>Designed and Developed by </Text>
                        <Spacer x={"0.3"}></Spacer>
                        <Link rel="noreferrer" target={"_blank"} href={"http://devlooper.in"}>
                            <Image width={"90px"} src={'devlooper.png'}></Image>
                        </Link>
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    )
}