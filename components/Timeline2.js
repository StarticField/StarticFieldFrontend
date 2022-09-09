import Script from "next/script";
import { Text, Spacer } from "@nextui-org/react";

export default function Timeline2() {
  return (
    <>
      <div className="container">
        <div className="top-section">
          <Text
            h1
            size={28}
          >
            Strategy Shaping
          </Text>
          <Spacer x={2} />
          <Text weight={'thin'} size={18}>
            We will analyze at your product from all angles and using our combined industry experience, outline the key elements of growth strategy. This will include the below components:
          </Text>
          <Spacer x={2} />
        </div>

        <div className="timeline">
          <div className="horizontalLine"></div>
          <div className="section">
            <div className="bead bead1"></div>
            <div className="content">
              <h3>Product</h3>
              <p>
                New features which you might consider adding to make your product more appealing.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead1"></div>
            <div className="content">
              <h3>Customer Research</h3>
              <p>Leveraging our consulting experience, we will research on the customers who have the need for this product and who would be the relevant stakeholders in the customer companies.</p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead2"></div>
            <div className="content">
              <h3>Marketing</h3>
              <p>
                What steps we can take to be visible to the relevant segment through appropriate channels and create a brand recall.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead2"></div>
            <div className="content">
              <h3>Sales</h3>
              <p>We will guide you on how to approach key leaders and influencers in organizations. This will include the exact language to be used in emails and messages to get a high response rate.</p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead3"></div>
            <div className="content">
              <h3>Sales Opportunities</h3>
              <p>Through our consulting networks, we will connect you to leaders whom we know where you can pitch your product. In fact, we will also be writing to them to enable you to get a first meeting. We will also sit with you and shape your pitch to help increase the chances of conversion.</p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead4"></div>
            <div className="content">
              <h3>Volt</h3>
              <p>SF’s Strategy Planning tool will be used to formulate and track the strategies to success.</p>
            </div>
          </div>
        </div>
      </div>

      <Script src="timeline.js"></Script>
    </>
  );
}
