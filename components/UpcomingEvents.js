import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/upcommingEvents.module.css";

const data = [
    {
        dates: "15 Nov - 27 Dec",
        event: "Mock Pitch",
        description:
          "Improve your pitch and prepare for next season of Shark Tank India, 2023",
        link: "./mock-pitch",
        background: "/form.png",
      },
  {
    dates: "7 Nov - 11 Dec",
    event: "Student CTO Hunt",
    description:
      "If you think you have what it takes to be a CTO or Tech Cofounder at one of the best student startups in India, then this is the competition for you",
    link: "./cto-hunt",
    background: "/allIndiaHunt.webp",
  },
  {
    dates: "1 Oct - 20 Nov",
    event: "Big 5 Problems",
    description:
      "Get top 5 problems in the industry to solve for and explore million dollars startup opportunities.",
    link: "./events",
    background: "/big5.webp ",
  },
 
];


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}


export default class UpcomingEvents extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            autoplay: false,
          },
        },
      ],
    };
    return (
        <div>
        <Slider {...settings}>
            {data?.map((item, index) => (
        <div key={index} className={styles.ctoHunt}>
            <div className={styles.card}>
                <div style={{
                      background: `url(${item?.background})`,
                      backgroundSize: 'cover',
                }} ></div>
                <div className={styles.cardText}>
                    <span className={styles.date}>{item.dates}</span>
                    <h2>{item.event}</h2>
                    <p>
                        {item.description}
                    </p>
                    <a href={`${item.link}`} style={{"width":"100%"}} className="w3-margin-top w3-hover-black w3-button w3-round-xlarge w3-blue" >More details</a>
                </div>
            </div>
        </div>
        ))}
      
       
    </Slider>
    </div>
);
  }
}
