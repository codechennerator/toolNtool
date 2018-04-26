import React, { Component } from "react";
import Slider from "react-slick"
import bg1 from "../img/bgImg/bg1.png"
import bg2 from "../img/bgImg/bg2.png"
import bg3 from "../img/bgImg/bg3.png"
import bg4 from "../img/bgImg/bg4.png"
import bg5 from "../img/bgImg/bg5.png"


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
                width:"65%",
                height:"50vh",
                left:"15%"
            }}>

                <Slider {...settings}>
                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${bg1})`, zIndex:1,  backgroundRepeat: "no-repeat",}}>
                    
                    </div>
                </div>

                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${bg2})`, zIndex:1,  backgroundRepeat: "no-repeat",}}>
                    </div>

                </div>
                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${bg3})`, zIndex:1,  backgroundRepeat: "no-repeat",}}>
                    </div>

                </div>
                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${bg4})`, zIndex:1,  backgroundRepeat: "no-repeat",}}>
                    </div>

                </div>
                <div>
                    <div style={{width:"100%", height:"60vh", backgroundImage: `url(${bg5})`, zIndex:1,  backgroundRepeat: "no-repeat",}}>
                    </div>

                </div>

                </Slider>
            </div>
        );
    }
}