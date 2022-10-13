import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";

export default function TimelineCTOHunt() {
    return (
        <>
            <div className="w3-container w3-margin-bottom ">
                <div className="top-section">
                    <Text
                        h1
                        size={28}
                    >
                        CTO Hunt Timeline
                    </Text>
                    <Spacer y={2} />
                </div>

                <div className="timeline3">
                    <div className="horizontalLine3"></div>
                    <div className="section3">
                        <div className="bead bead1"></div>
                        <div className="content">
                            <h3>Round 1</h3>
                            <h5>Starts on <e className="w3-text-blue" >18 November, 2022</e></h5>
                            <p>
                                Be a part of building a great idea into a startup.
                                On one hand are student entrepreneurs who have the energy, time and passion to build path breaking startups. But who have been hustling with the lack of experience and even small amounts of capital.
                            </p>
                        </div>
                    </div>
                    <div className="section3">
                        <div className="bead bead2"></div>
                        <div className="content">
                            <h3>Round 2</h3>
                            <h5>Starts on <e className="w3-text-blue" >24 November, 2022</e></h5>
                            <p>
                                Be a part of building a great idea into a startup.
                                On one hand are student entrepreneurs who have the energy, time and passion to build path breaking startups. But who have been hustling with the lack of experience and even small amounts of capital.
                            </p>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="bead bead3"></div>
                        <div className="content">
                            <h3>Round 3</h3>
                            <h5>Starts on <e className="w3-text-blue" >4 December, 2022</e></h5>
                            <p>
                                Be a part of building a great idea into a startup.
                                On one hand are student entrepreneurs who have the energy, time and passion to build path breaking startups. But who have been hustling with the lack of experience and even small amounts of capital.
                            </p>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="bead bead4"></div>
                        <div className="content">
                            <h3>Winners will be announced on</h3>
                            <h5><e className="w3-text-blue" >1 January, 2023</e></h5>
                            <p>
                                Be a part of building a great idea into a startup.
                                On one hand are student entrepreneurs who have the energy, time and passion to build path breaking startups. But who have been hustling with the lack of experience and even small amounts of capital.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Script src="timeline3.js"></Script>
        </>
    );
}
