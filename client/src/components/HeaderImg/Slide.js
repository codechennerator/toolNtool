import React, { Component } from "react";
import Slider from "react-slick"
import HeaderImg1 from "../img/header1.jpeg";
import HeaderImg2 from "../img/header2.png";
import HeaderImg3 from "../img/header3.jpg";

export default class Slide extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true
        };

        return (
            <div style={{
                position:"absolute",
                zIndex:1,
                width:"100%",
                height:"50vh"
            }}>

                <Slider {...settings}>
                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${HeaderImg1})`, zIndex:1}}>
                    
                    </div>
                </div>

                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${HeaderImg2})`, zIndex:1}}>
                    </div>

                </div>
                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${HeaderImg3})`, zIndex:1}}>
                    </div>

                </div>

                </Slider>
            </div>
        );
    }
}