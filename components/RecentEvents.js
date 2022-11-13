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

const data =[{
    link:'https://www.youtube-nocookie.com/embed/-tJRl-yEeV4',
    person:'Shamik Guha',
    title:'Convert your sorrows to success',
    description:'Shamik Guha - CEO & Co-Founder of Altor discussed his journey in his startup, which was influenced by the death of a friend.....'
},
{
    link:'https://www.youtube.com/embed/iqLK-Dvk_EE',
    person:'Udit Goenka',
    title:'How to Bootstrap your Business?',
    description:'Mr Udit Goenka, Founder & CEO at PitchGround - Bootstrapped to ﹩20M and part of LinkedIn accelerator program 2022 gave.....'
},
{
    link:'https://www.youtube.com/embed/YyCR7gK7zSI',
    person:'Rakhi Pal',
    title:'Leveraging Communities For Start',
    description:'Ms Rakhi Pal, Co-Founder & COO at Event Beep, that got featured and funded on Shark Tank India tells about why community.....'
},
{
    link:'https://www.youtube.com/embed/y3ZQaoT_N_4',
    person:'Anant Sharma',
    title:'Journey to Shark Tank India 🦈',
    description:'Mr Anant Sharma, the Co Founder & CEO of Tweek Labs, discussed about his journey to Shark Tank India and his insights about.....'
},
{
    link:'https://www.youtube.com/embed/fM0KsSCNjvk',
    person:'Francesco Ciulla',
    title:'Scope of DevOps',
    description:'To explain why and how DevOps approach is getting more adopted every companies nowadays, StarticField invited Mr. Francesco.....'
},
{
    link:'https://www.youtube.com/embed/zVnP8d6Erm4',
    person:'GS Madhusudan',
    title:'Semiconductor based Industry',
    description:'To address more on the shortage problems and scope of Semiconductor based industries and startups in India, StarticField.....'
},
{
    link:'https://www.youtube.com/embed/70rt1tSmUYc',
    person:'Anurag Khurana',
    title:'Gaming: The future of Start ups',
    description:'Mr Anurag Khurana the Founder & CEO of Penta Esports, former Country Manager at Riot Games and former Esports consultant.....'
},
{
    link:'https://www.youtube.com/embed/B_Amore8LNs',
    person:'Martynas Fedotovas',
    title:'Space Start Ups To The Moon',
    description:'Serial Entrepreneur and Space Advocate &quot;Martynas Fedotovas&quot; discussed on Space related startups and space based explorations.....'
},]

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
                        initialSlide: 1,
                    }
                },
            ]
        };
        return (
            <div>
                <h2 className={styles.heading}>Recent Events</h2>

                <Slider  {...settings}>
                {data?.map((item, index)=>(

                    <div key={index}>
                        <div  className={styles.card}>
                            <iframe className={styles.cardImage}
                                        src={item?.link}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                            </iframe>
                            <div className={styles.cardText}>
                                <span className={styles.date}>{item?.person}</span>
                                <h2>{item?.title}</h2>
                                <p>
                                   {item?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                        ))}
                    
                </Slider>

            </div>
        );
    }
}