import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";

export default function TimelineCTOHunt() {
  return (
    <>
      <div className="w3-container w3-margin-bottom ">
        <div className="top-section">
          <Text h1 size={28}>
            Mock Pitch Timeline
          </Text>
          <Spacer y={2} />
        </div>

        <div className="timeline3">
          <div className="horizontalLine3"></div>
          <div className="section3">
            <div className="bead bead1"></div>
            <div className="content">
              <h3>Application and Pitch Submission (Round 1)</h3>
              <h5>
                <e className="w3-text-blue">15 Nov to 11 Dec, 2022</e>
              </h5>
            </div>
          </div>
          <div className="section3">
            <div className="bead bead2"></div>
            <div className="content">
              <h3>First pitch to SF Internal team. (Round 2)</h3>
              <h5>
                <e className="w3-text-blue">17 -18 Dec, 2022</e>
              </h5>
            </div>
          </div>
          <div className="section3">
            <div className="bead bead3"></div>
            <div className="content">
              <h3>Final pitch to judges</h3>
              <h5>
                On <e className="w3-text-blue">27 Dec, 2022</e>
              </h5>
            </div>
          </div>
          <div className="section3">
            <div className="bead bead2"></div>
            <div className="content">
              <h3>One-on-one mentorship session with winners</h3>
              <h5>
                <e className="w3-text-blue">6 Jan, 2023</e>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Script src="timeline3.js"></Script>
    </>
  );
}
