import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/upcommingEvents.module.css";

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
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Shamik Guha</span>
                            <h2>CEO & Co-Founder of Altor</h2>
                            <p>
                                Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                startup, which was influenced by the death of a friend.....
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Shamik Guha</span>
                            <h2>CEO & Co-Founder of Altor</h2>
                            <p>
                                Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                startup, which was influenced by the death of a friend.....
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Shamik Guha</span>
                            <h2>CEO & Co-Founder of Altor</h2>
                            <p>
                                Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                startup, which was influenced by the death of a friend.....
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Shamik Guha</span>
                            <h2>CEO & Co-Founder of Altor</h2>
                            <p>
                                Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                startup, which was influenced by the death of a friend.....
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Shamik Guha</span>
                            <h2>CEO & Co-Founder of Altor</h2>
                            <p>
                                Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                startup, which was influenced by the death of a friend.....
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <span className={styles.date}>Shamik Guha</span>
                            <h2>CEO & Co-Founder of Altor</h2>
                            <p>
                                Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                startup, which was influenced by the death of a friend.....
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            </div>
        );
    }
}