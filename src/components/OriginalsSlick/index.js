import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4, // Default for 1280px+ screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1279, // For screens between 769px and 1279px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For screens between 481px and 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // For screens 0px - 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class OriginalsSlick extends Component {
  renderSlider = () => {

    const {originals } = this.props;
    const {originalsMovieList} = originals
    console.log(originalsMovieList)

    return (
      <Slider {...settings}>
         {originalsMovieList.map((eachMovie) => {
          const { id, posterPath, title } = eachMovie; // Use trending list props instead of hardcoded data
        
          return (
            <div className="slick-item" key={id}>
              <img className="logo-image1" src={posterPath} alt={title} />
            </div>
          );

        })}
      </Slider>
    );
  };

  render() {
    return (
      <div className="main-container1">
    
        <div className="slick-container1">{this.renderSlider()}</div>
      </div>
    );
  }
}

export default  OriginalsSlick ;
