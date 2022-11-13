import Script from "next/script";
import { Typography } from "@mui/material";

 const Timeline = () => {
  return (
    <>
      <div className="container">
        <div className="top-section">
          <Typography
            variant ="h3"  
            className="title"
            mb={2}
            fontWeight={700}
            sx={{
              background: "-webkit-linear-gradient(45deg, #3361AD -20%,#6061AC 5%,#39B8C8 80%,#6AC5AA -90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"

            }}
            // sx={{
            //   colorGradient:"to right, #3361AD -20%,#6061AC 5%,#39B8C8 80%,#6AC5AA -90%",
            // }}
          >
            Why join Startic Field?
          </Typography>
          <Typography
              variant="h1"
              fontSize='28px'
              mb={2}
          >
              For Student Startups
          </Typography>
          {/* <Spacer x={2} /> */}
        </div>

        <div className="timeline">
          <div className="horizontalLine"></div>
          <div className="section">
            <div className="bead bead1"></div>
            <div className="content">
              <h3>Develop and Work on your idea</h3>
              <p>
                Unleash the full potential of your idea with our strategic
                planning tool, VOLT.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead2"></div>
            <div className="content">
              <h3>Build your team</h3>
              <p>Find co-founders with our community of startup enthusiasts.</p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead3"></div>
            <div className="content">
              <h3>Gain Knowledge</h3>
              <p>
                Weekly knowledge sessions hosted by experts and industry
                leaders.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="bead bead4"></div>
            <div className="content">
              <h3>Prepare for Accelerators and Funding</h3>
              <p>Customized path to take your startup to the next level.</p>
            </div>
          </div>
        </div>
      </div>

      <Script src="timeline.js"></Script>
    </>
  );
}

export default Timeline