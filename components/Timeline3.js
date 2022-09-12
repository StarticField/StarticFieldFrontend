import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";

export default function Timeline3() {
    return (
        <>
            <div className="container">
                <div className="top-section">
                    <Text
                        h1
                        size={28}
                    >
                        For Students
                    </Text>
                    <Spacer y={4} />
                </div>

                <div className="timeline3">
                    <div className="horizontalLine3"></div>
                    <div className="section3">
                        <div className="bead bead1"></div>
                        <div className="content">
                            <h3>Lateral Pitches</h3>
                            <p>
                                Be a part of building a great idea into a startup.
                            </p>
                        </div>
                    </div>
                    <div className="section3">
                        <div className="bead bead2"></div>
                        <div className="content">
                            <h3>Freelance and internship opportunities</h3>
                            <p>
                                Get a Startic field internship certificate by working for a startup.
                            </p>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="bead bead3"></div>
                        <div className="content">
                            <h3>Learn and Grow</h3>
                            <p>Weekly knowledge sessions hosted by experts and industry leaders.</p>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="bead bead4"></div>
                        <div className="content">
                            <h3>Community</h3>
                            <p>
                                Fastest growing community of startup enthusiasts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Script src="timeline3.js"></Script>
        </>
    );
}
