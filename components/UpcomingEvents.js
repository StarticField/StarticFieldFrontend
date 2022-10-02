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
                <h2 className={styles.heading}>Upcoming events</h2>
                <Slider {...settings}>
                <div className={styles.ctoHunt}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Startic Field</span>
                            <h2>Student CTO Hunt</h2>
                            <p>
                                Get ready for the all India CTO Hunt comming soon.....
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.big5}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Startic Field</span>
                            <h2>Big 5</h2>
                            <p>
                                Comming Soon. . . .
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Startic Field</span>
                            <h2>Coming Soon. . . .</h2>
                            <p>
                                Comming Soon. . . .
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            </div>
        );
    }
}