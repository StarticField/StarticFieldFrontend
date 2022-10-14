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
                            <h3>Round 1 - OPPORTUNITY FINDING</h3>
                            <h5>Ends on <e className="w3-text-blue" >14 Nov, 2022</e></h5>
                            <p>
                            We've provided a list of platforms in the brochure for you to analyze and choose from - choose 5 unique features which are not already listed and prepare a document outlining these features for review.
                            </p>
                        </div>
                    </div>
                    <div className="section3">
                        <div className="bead bead2"></div>
                        <div className="content">
                            <h3>Round 2 - THE BUILD</h3>
                            <h5>Ends on <e className="w3-text-blue" >27 Nov, 2022</e></h5>
                            <p>
                            Selected participants will now have to build the platform with at least one suggested feature and submit it to us.
                            </p>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="bead bead3"></div>
                        <div className="content">
                            <h3>Round 3 - INTERVIEW</h3>
                            <h5>On <e className="w3-text-blue" >3 Dec, 2022</e></h5>
                            <p>
                            Selected participants are eligible to enter our CTO Pool. They will be interviewed about the build and their entrepreneurial skills will be judged by our team. The interview will take place during the closing session of the event in front of a CTO guest from a company and the audience. Winners will be announced live in the same session with the prizes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Script src="timeline3.js"></Script>
        </>
    );
}
