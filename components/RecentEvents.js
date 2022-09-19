import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/recentEvents.module.css"

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

export default class RecentEvents extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            // slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
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
                <h2 className={styles.heading}>Recent Events</h2>
                <Slider {...settings}>
                    <div>
                        <div className={styles.card}>
                            <iframe className={styles.cardImage} width="100%" height="100%"
                                        src="https://www.youtube-nocookie.com/embed/-tJRl-yEeV4"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                            </iframe>
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

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/iqLK-Dvk_EE"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            <div className={styles.cardText}>
                                <span className={styles.date}>Martynas Fedotovas</span>
                                <h2>Space Start Ups To The Moon</h2>
                                <p>
                                    Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his
                                    startup, which was influenced by the death of a friend.....
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.card}>

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/YyCR7gK7zS"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
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

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/y3ZQaoT_N_4"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
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

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/fM0KsSCNjvk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
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

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/zVnP8d6Erm4"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
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

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/70rt1tSmUYc"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
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

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/B_Amore8LNs"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
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