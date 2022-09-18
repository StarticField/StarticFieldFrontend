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
            slidesToShow: 2,
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
                        <div className={styles.slideBackground}>1</div>
                    </div>
                    <div>
                        <div className={styles.slideBackground}>2</div>
                    </div>
                    <div>
                        <div className={styles.slideBackground}>3</div>
                    </div>
                    <div>
                        <div className={styles.slideBackground}>4</div>
                    </div>
                    <div>
                        <div className={styles.slideBackground}>5</div>
                    </div>
                    <div>
                        <div className={styles.slideBackground}>6</div>
                    </div>
                </Slider>
            </div>
        );
    }
}