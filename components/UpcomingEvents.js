import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/upcommingEvents.module.css";
import {Image, Link, Text} from "@nextui-org/react";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color:'red' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
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
                        initialSlide: 1
                    }
                },
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                <div className={styles.ctoHunt}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>6 Nov - 3 Dec</span>
                            <h2>Student CTO Hunt</h2>
                            <p>
                            If you think you have what it takes to be a CTO or Tech Cofounder at one of the best student startups in India, then this is the competition for you
                            </p>
                            <a href={"./cto-hunt"} style={{"width":"100%"}} className="w3-margin-top w3-hover-black w3-button w3-round-xlarge w3-blue" >More details</a>
                        </div>
                    </div>
                </div>
                <div className={styles.big5}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>1 Oct - 30 Oct</span>
                            <h2>Big 5</h2>
                            <p>
                                Get top 5 problems in the industry to solve for and explore million dollars startup opportunities.
                            </p>
                            <a href={"./cto-hunt"} style={{"width":"100%"}} className="w3-margin-top w3-hover-black w3-button w3-round-xlarge w3-blue" >More details</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>20 Nov - 8 Jan</span>
                            <h2>Mock Pitch</h2>
                            <p>
                                Improve your pitch and prepare for next season of Shark Tank India, 2023
                            </p>
                            <a href={"./cto-hunt"} style={{"width":"100%"}} className="w3-margin-top w3-hover-black w3-button w3-round-xlarge w3-blue" >More details</a>
                        </div>
                    </div>
                </div>
            </Slider>
            </div>
        );
    }
}