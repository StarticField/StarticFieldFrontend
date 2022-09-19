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
                <h2 className={styles.heading}>Recent Events</h2>
                <Slider {...settings}>
                    <div>
                        <div className={styles.card}>
                            <iframe className={styles.cardImage}
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
                                <span className={styles.date}>Udit Goenka</span>
                                <h2>How to Bootstrap your Business ?</h2>
                                <p>
                                    Mr Udit Goenka, Founder & CEO at PitchGround - Bootstrapped to ﹩20M and part of LinkedIn accelerator program 2022 gave.....
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.card}>

                            <iframe className={styles.cardImage} width="100%" height="100%"
                                    src="https://www.youtube.com/embed/YyCR7gK7zSI"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            <div className={styles.cardText}>
                                <span className={styles.date}>Rakhi Pal</span>
                                <h2>Leveraging Communities For Start</h2>
                                <p>
                                    Ms Rakhi Pal, Co-Founder & COO at Event Beep, that got featured and funded on Shark Tank India tells about why community.....
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
                                <span className={styles.date}>Anant Sharma</span>
                                <h2>Journey to Shark Tank India 🦈</h2>
                                <p>
                                    Mr Anant Sharma, the Co Founder & CEO of Tweek Labs, discussed about his journey to Shark Tank India and his insights about.....
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
                                <span className={styles.date}>Francesco Ciulla</span>
                                <h2>Scope of DevOps</h2>
                                <p>
                                    To explain why and how DevOps approach is getting more adopted every companies nowadays, StarticField invited Mr. Francesco.....
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
                                <span className={styles.date}>GS Madhusudan</span>
                                <h2>Semiconductor based Industry</h2>
                                <p>
                                    To address more on the shortage problems and scope of Semiconductor based industries and startups in India, StarticField.....
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
                                <span className={styles.date}>Anurag Khurana</span>
                                <h2>Gaming: The future of Start ups</h2>
                                <p>
                                    Mr Anurag Khurana the Founder & CEO of Penta Esports, former Country Manager at Riot Games and former Esports consultant.....
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
                                <span className={styles.date}>Martynas Fedotovas</span>
                                <h2>Space Start Ups To The Moon</h2>
                                <p>
                                    Serial Entrepreneur and Space Advocate &quot;Martynas Fedotovas&quot; discussed on Space related startups and space based explorations.....
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}