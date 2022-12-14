import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Image.css'

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            sliderIndex: 0
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            sliderIndex: this.value
        });
    }

    render() {
        var settings = {
            dots: true,
        
            speed: 200,
            slidesToShow: 1.5,
            slidesToScroll: 2.2,
            initialSlide: 0,
            centerPadding: "60px",
            focusOnSelect: true,
            autoplay:true,
         autoplaySpeed:1000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1.1,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

          
        return (
            <div className=" ">
                <div>

                    <Slider
                    {...settings}
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        // slidesToShow={3}
                        dots={true}
                        speed={500}
                        // autoplay={true}
                        autoplaySpeed={1000}
                        beforeChange={(createImg, nextImg) => this.setState.sliderIndex = nextImg}            
                        centerMode= {true}
                        infinite= {true}
                        
                   
                        
                        >
                        <div className="lg:p-8 md:p-6 sm:p-2  ">
                            <img src="https://images.unsplash.com/photo-1670968982569-722c875727dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-96 lg:h-[31.25rem]  rounded-2xl" />
                        </div>
                        <div className="lg:p-8 md:p-6 sm:p-2  ">
                            <img src="https://images.unsplash.com/photo-1664574653006-4d7eb5f1a418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-96 lg:h-[31.25rem]  rounded-2xl" />
                        </div>
                        <div className="lg:p-8 md:p-6 sm:p-2  ">
                            <img src="https://plus.unsplash.com/premium_photo-1661484952533-83719b54ca6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-96 lg:h-[31.25rem]  rounded-2xl" />
                        </div>
                        <div className="lg:p-8 md:p-6 sm:p-2  ">
                            <img src="https://images.unsplash.com/photo-1670942298778-f339cac1fe01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-96 lg:h-[31.25rem]  rounded-2xl" />
                        </div>
                        <div className="lg:p-8 md:p-6 sm:p-2  ">
                            <img src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-96 lg:h-[31.25rem]  rounded-2xl" />
                        </div>
                        <div className="lg:p-8 md:p-6 sm:p-2  ">
                            <img src="https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className="w-full h-96 lg:h-[31.25rem]  rounded-xl"/>
                        </div>
                    </Slider>
                </div>
                
                <div className="container mx-auto pt-24 lg:pt-3">

                <Slider
             
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={6}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  
                >
                    <div>
                        <img src="https://images.unsplash.com/photo-1670968982569-722c875727dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className=" mr-2 h-20 md:h-28  rounded-lg" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1664574653006-4d7eb5f1a418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" className=" mr-2 h-20 md:h-28  rounded-lg" />
                    </div>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1661484952533-83719b54ca6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className=" mr-2 h-20 md:h-28  rounded-lg" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1670942298778-f339cac1fe01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className=" mr-2 h-20 md:h-28  rounded-lg" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1664575196044-195f135295df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className=" mr-2 h-20 md:h-28  rounded-lg" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" className=" mr-2 h-20 md:h-28  rounded-lg" />
                    </div>
                </Slider>
                </div>

            </div>
        );
    }
}