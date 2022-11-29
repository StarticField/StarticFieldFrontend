import { Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const ForStudents = () => {
  return (
    <div>
      <div className="w3-row ">
        <div className="w3-third w3-padding">
          <Image
            src="/banner4.webp"
            height="100px"
            width="100px"
            layout="responsive"
            className="w3-round-xlarge"
            alt="student"
          />
        </div>
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
            Are you a student ? Do you want to convert your idea into a real
            startup ?
          </Text>
          <h4 className="w3-margin w3-text-grey">
            Every big company starts off with an idea and few people with the
            commitment to make it into a reality. And if you are a student or a
            group of students with these two things, Startic Field is the
            destination you should go to next. This is the sandbox where you
            work on your ideas and build them into successful business by
            following the below journey.{" "}
          </h4>
          <h4 className="w3-margin w3-text-grey">
            Even if you do not have ideas but have the passion to join and
            contribute to a campus based startup, you need to create your
            profile on Startic Field.
          </h4>
          <a
            href="./forStartups"
            className="w3-round-xxlarge w3-indigo w3-margin w3-padding w3-button w3-text-white w3-xlarge"
          >
            <p className=" w3-large">For student startups </p>
          </a>
          <a
            href="./forStudents"
            className="w3-button w3-margin w3-purple w3-round-xxlarge w3-text-white w3-padding w3-xlarge"
          >
            <p className=" w3-large ">For students</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForStudents;
