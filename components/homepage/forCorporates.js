import { Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const ForCorporates = () => {
  return (
    <div>
        <div className="w3-row ">
          <div className="w3-twothird w3-display-container">
            <Text
              h1
              className="w3-margin"
              weight={"semibold"}
              css={{
                marginTop: "50",
                padding: "0",
              }}
            >
              Are you a corporate professional ? Do you have an idea but no time
              to work on it ?
            </Text>
            <h4 className="w3-margin w3-text-grey">
              India is the country with the 2nd highest number of Unicorns after
              USA. However, if we take into consideration the population of both
              countries, India has only utilized 6% of its startup potential.
              This is because a vast population of experienced and talented
              people with entrepreneurial aspirations are unable to fulfil them
              as they are unable to find the right set of people to form a team.
              They have the experience. They have the networks. They even have
              some money to spare. But after a hard day&#39;s work and a family to
              look after, they hardly find time or energy to work on the ground.
              If you are one such individual, Startic Field is the place for
              you. Join the network and connect with student entrepreneurs with
              whom you can partner to make your long-buried dream of
              entrepreneurship a reality.{" "}
            </h4>
            <a
              href="./forCorporateContributors"
              style={{ width: "80%" }}
              className="w3-margin w3-row w3-round-xlarge w3-button w3-padding w3-pink w3-large"
            >
              <e className="w3-left ">For corporate professionals</e>
              <e className="w3-right">&gt;</e>
            </a>
          </div>
          <div className="w3-third w3-padding">
            <Image
              src="/banner3.webp"
              height="100px"
              width="100px"
              layout="responsive"
              className="w3-round-xlarge"
              alt="banner"
            />
          </div>
        </div>
    </div>
  )
}

export default ForCorporates