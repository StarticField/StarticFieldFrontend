import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";

export default function Timeline4() {
    return (
        <>
            <div className="container">
                <div className="top-section">
                    <Text
                        h1
                        size={28}
                    >
                        For Corporate Professionals
                    </Text>
                    <Spacer y={4} />
                </div>

                <div className="timeline4">
                    <div className="horizontalLine4"></div>
                    <div className="section4">
                        <div className="bead bead2"></div>
                        <div className="content">
                            <h3>Re-kindle your passion</h3>
                            <p>
                                Realize your startup idea by forming a team of college students.
                            </p>
                        </div>
                    </div>
                    <div className="section4">
                        <div className="bead bead4"></div>
                        <div className="content">
                            <h3>Be a Hawk</h3>
                            <p>
                                Invest in startups from premier educational institutions in the country
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Script src="timeline4.js"></Script>
        </>
    );
}
